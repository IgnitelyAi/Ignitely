import { NextResponse } from "next/server"
import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // SERVICE ROLE KEY gebruiken!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userId, businessName, websiteType, doelgroep, style, color, packageName } = body

    // 🔹 Check credits
    const { data: userData } = await supabase
      .from("users")
      .select("credits")
      .eq("id", userId)
      .single()

    if (!userData || userData.credits <= 0) {
      return NextResponse.json({ error: "Geen credits meer" }, { status: 400 })
    }

    // 🔹 Credits verlagen
    await supabase
      .from("users")
      .update({ credits: userData.credits - 1 })
      .eq("id", userId)

    const prompt = `
Maak een professionele website in pure HTML + Tailwind CSS.

Bedrijf: ${businessName}
Type: ${websiteType}
Doelgroep: ${doelgroep}
Stijl: ${style}
Kleur: ${color}
Pakket: ${packageName}

Geef alleen geldige HTML terug.
`

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      stream: true,
    })

    const encoder = new TextEncoder()

    return new Response(
      new ReadableStream({
        async start(controller) {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content
            if (content) {
              controller.enqueue(encoder.encode(content))
            }
          }
          controller.close()
        },
      }),
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Fout bij genereren" }, { status: 500 })
  }
}