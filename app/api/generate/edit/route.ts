import { createClient } from "@supabase/supabase-js"
import OpenAI from "openai"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userId, currentHTML, editPrompt } = body

    if (!userId || !currentHTML || !editPrompt) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 🔹 1. Check credits
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("credits")
      .eq("id", userId)
      .single()

    if (userError || !user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    if (user.credits <= 0) {
      return NextResponse.json(
        { error: "No credits left" },
        { status: 403 }
      )
    }

    // 🔹 2. Deduct 1 credit
    await supabase
      .from("users")
      .update({ credits: user.credits - 1 })
      .eq("id", userId)

    // 🔹 3. Stream OpenAI response
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content:
            "You are a professional website editor. Return ONLY clean HTML code.",
        },
        {
          role: "user",
          content: `
Current HTML:
${currentHTML}

Edit request:
${editPrompt}
          `,
        },
      ],
    })

    const encoder = new TextEncoder()

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || ""
          controller.enqueue(encoder.encode(content))
        }
        controller.close()
      },
    })

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("Edit error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}