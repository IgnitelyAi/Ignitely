import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openaiApiKey = process.env.OPENAI_API_KEY

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { pkg, messages } = body || {}

    const lastUser = Array.isArray(messages) && messages.length ? messages[messages.length-1] : null
    const userText = lastUser?.text || '...' 

    if (!openaiApiKey) {
      const reply = `Voorbeeldantwoord: Ik heb je vraag begrepen: "${String(userText).slice(0,200)}". (Geen OpenAI sleutel geconfigureerd.)`
      return NextResponse.json({ reply })
    }

    const client = new OpenAI({ apiKey: openaiApiKey })

    const system = { role: 'system', content: 'Je bent een assistent die website-aanpassingen schrijft. Reageer met korte instructies of met HTML-diffs wanneer gevraagd.' }
    const userMsg = { role: 'user', content: `User request: ${userText}` }

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [system, userMsg],
      max_tokens: 800,
    })

    const reply = completion.choices?.[0]?.message?.content || 'Ik kan je nu niet helpen.'
    return NextResponse.json({ reply })
  }catch(e:any){
    console.error('chat error', e?.message || e)
    return NextResponse.json({ error:'Invalid request' }, { status:400 })
  }
}
