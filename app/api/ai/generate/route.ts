import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { pkg, form } = body || {}

    const siteName = form?.siteName || 'Mijn Site'
    const theme = form?.theme || 'Modern'

    // Simple stub: return a minimal HTML preview using submitted values
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${siteName}</title>
      <style>body{font-family:Inter,system-ui; background:#0b0b0f; color:#fff; padding:40px} .hero{max-width:900px;margin:0 auto} h1{font-family:Playfair Display,serif;font-size:42px;color:#fff}</style>
      </head><body>
      <div class="hero"><h1>${siteName}</h1><p style="opacity:.8">Thema: ${theme} — Pakket: ${pkg}</p><section><h2>Over</h2><p>${(form?.goals) || 'Een korte beschrijving van je doelen.'}</p></section></div>
      </body></html>`

    return NextResponse.json({ html })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
