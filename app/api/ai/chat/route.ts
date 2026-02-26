import { NextResponse } from 'next/server'

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { pkg, messages } = body || {}

    // Simple stub reply — in production integrate with an LLM or conversational API
    const lastUser = Array.isArray(messages) && messages.length ? messages[messages.length-1] : null
    const userText = lastUser?.text || '...' 

    const reply = `Voorbeeldantwoord: Ik heb je gevraagd begrepen: "${String(userText).slice(0,200)}". Ik kan kopteksten, kleuren en secties aanpassen.`

    return NextResponse.json({ reply })
  }catch(e){
    return NextResponse.json({ error:'Invalid request' }, { status:400 })
  }
}
