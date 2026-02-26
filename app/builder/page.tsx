"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function BuilderPage(){
  const router = useRouter()
  const params = useSearchParams()
  const pkg = params.get('pkg') || 'starter'

  const [step, setStep] = useState(0)
  const [form, setForm] = useState<any>({
    siteName:'', company:'', goals:'', theme:'Modern', colors:'', logoFile:null
  })
  const [loading, setLoading] = useState(false)
  const [previewHtml, setPreviewHtml] = useState<string | null>(null)

  function update(key:any, val:any){ setForm((s:any)=>({...s,[key]:val})) }

  async function handleGenerate(e:any){
    e?.preventDefault()
    setLoading(true)
    try{
      const res = await fetch('/api/ai/generate',{ method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({pkg,form}) })
      const data = await res.json()
      setPreviewHtml(data.html || '<div class="preview">Voorbeeld site</div>')
      setStep(2)
    }catch(err){ alert('Failed to generate') }
    setLoading(false)
  }

  return (
    <div className="builderWrapper">
      <div className="container">
        <h1>AI Website Builder — Pakket: {pkg}</h1>

        {step===0 && (
          <div className="intro">
            <p>Beantwoord een korte vragenlijst zodat de AI jouw website kan bouwen.</p>
            <button onClick={()=>setStep(1)} className="btn">Start vragenlijst</button>
          </div>
        )}

        {step===1 && (
          <form onSubmit={handleGenerate} className="qform">
            <label>Wat is de naam van je website / bedrijf?
              <input value={form.siteName} onChange={(e)=>update('siteName',e.target.value)} required />
            </label>

            <label>Wat voor bedrijf is het?
              <input value={form.company} onChange={(e)=>update('company',e.target.value)} />
            </label>

            <label>Wat zijn je doelen met de website? (kort)
              <textarea value={form.goals} onChange={(e)=>update('goals',e.target.value)} />
            </label>

            <label>Welk thema wil je?
              <select value={form.theme} onChange={(e)=>update('theme',e.target.value)}>
                <option>Modern</option>
                <option>Luxe</option>
                <option>Minimal</option>
                <option>Portfolio</option>
              </select>
            </label>

            <label>Voorkeurskleur (hex of naam)
              <input value={form.colors} onChange={(e)=>update('colors',e.target.value)} placeholder="#7c5cff" />
            </label>

            <label>Upload logo (optioneel)
              <input type="file" accept="image/*" onChange={(e:any)=>update('logoFile', e.target.files?.[0] || null)} />
            </label>

            <div style={{marginTop:12}}>
              <button type="submit" className="btn" disabled={loading}>{loading? 'Genereren...' : 'Genereer website'}</button>
            </div>
          </form>
        )}

        {step===2 && (
          <div>
            <h2>Preview</h2>
            <div className="previewWrapper">
              {previewHtml ? <div dangerouslySetInnerHTML={{__html: previewHtml}} /> : <div className="placeholder">Geen preview</div>}
            </div>

            <div style={{marginTop:12}}>
              <button className="btn" onClick={()=>setStep(3)}>Start chat met AI om aanpassingen te doen</button>
            </div>
          </div>
        )}

        {step===3 && (
          <div>
            <h2>AI Chat</h2>
            <ChatBox previewHtml={previewHtml} pkg={pkg} />
          </div>
        )}

      </div>

      <style jsx>{`
        .builderWrapper{ min-height:100vh; padding:80px 20px; background: linear-gradient(180deg,#07070b,#0d1117); color:white }
        .container{ max-width:900px; margin:0 auto }
        .qform label{ display:block; margin-bottom:12px }
        input, textarea, select{ width:100%; padding:10px; border-radius:8px; background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); color:white }
        .btn{ padding:10px 14px; border-radius:10px; background:linear-gradient(90deg,#7c3aed,#2563eb); border:none; color:white; cursor:pointer }
        .previewWrapper{ margin-top:12px; border:1px dashed rgba(255,255,255,0.06); padding:12px; border-radius:8px; background: rgba(0,0,0,0.4) }
      `}</style>
    </div>
  )
}

function ChatBox({previewHtml, pkg}: any){
  const [messages, setMessages] = useState<any[]>([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  async function send(){
    if(!text) return
    const userMsg = {role:'user', text}
    setMessages(m=>[...m,userMsg])
    setText('')
    setLoading(true)
    try{
      const res = await fetch('/api/ai/chat',{method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({pkg, messages:[...messages,userMsg]})})
      const data = await res.json()
      setMessages(m=>[...m,{role:'assistant', text:data.reply}])
    }catch(e){ alert('Chat failed') }
    setLoading(false)
  }

  return (
    <div>
      <div style={{maxHeight:320, overflow:'auto', border:'1px solid rgba(255,255,255,0.04)', padding:12, borderRadius:8}}>
        {messages.map((m,i)=> <div key={i} style={{marginBottom:10}}><strong>{m.role}:</strong> <div>{m.text}</div></div>)}
      </div>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Vraag de AI om iets aan te passen..." />
        <button onClick={send} disabled={loading} className="btn">{loading? '...' : 'Verstuur'}</button>
      </div>
    </div>
  )
}
