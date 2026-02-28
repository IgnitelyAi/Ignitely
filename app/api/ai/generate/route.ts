import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openaiApiKey = process.env.OPENAI_API_KEY

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { pkg, form } = body || {}

    const siteName = (form?.siteName || 'Mijn Site') as string
    const theme = (form?.theme || 'Modern') as string
    const goals = (form?.goals || 'Een korte beschrijving van je doelen.') as string

    // If no OpenAI key is configured, return a simple stub (keeps UI functional)
    if (!openaiApiKey) {
      const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${siteName}</title>
        <style>body{font-family:Inter,system-ui; background:#0b0b0f; color:#fff; padding:40px} .hero{max-width:900px;margin:0 auto} h1{font-family:Playfair Display,serif;font-size:42px;color:#fff}</style>
        </head><body>
        <div class="hero"><h1>${siteName}</h1><p style="opacity:.8">Thema: ${theme} — Pakket: ${pkg}</p><section><h2>Over</h2><p>${goals}</p></section></div>
        </body></html>`

      return NextResponse.json({ html })
    }

    const client = new OpenAI({ apiKey: openaiApiKey })

    // Build a prompt that asks the model to generate a complete HTML website
    const prompt = `Je bent een website generator. Maak volledige, semantische HTML (incl. inline minimale CSS) voor een kleine marketing-website gebaseerd op de volgende input.
Name: ${siteName}
Pakket: ${pkg}
Thema: ${theme}
Doelen: ${goals}

Eisen:
- Lever enkel geldige HTML (<!doctype html> ...)
- Gebruik moderne, responsieve layout met een hero, features/secties, contact sectie.
- Gebruik plausibele afbeeldings-URL's (bijv. https://source.unsplash.com/featured/?{keyword}) waar relevant.
- Voeg tekstinhoud toe die specifiek is voor de input.
- Geef alleen de HTML terug, zonder extra uitleg.
`

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Je genereert alleen HTML; geen extra tekst.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 2500,
    })

    const html = completion.choices?.[0]?.message?.content || ''

    return NextResponse.json({ html })
  } catch (err: any) {
    console.error('generate error', err?.message || err)
    return NextResponse.json({ error: err?.message || 'Invalid request' }, { status: 500 })
  }
}
