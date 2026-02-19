"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

function AIAgentContent() {
  const searchParams = useSearchParams()
  const packageName = searchParams.get("package") || "free"

  const [user, setUser] = useState<any>(null)
  const [credits, setCredits] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [websiteHTML, setWebsiteHTML] = useState("")
  const [form, setForm] = useState({
    businessName: "",
    websiteType: "",
    doelgroep: "",
    style: "",
    color: "",
  })

  // 🔹 Load user + credits
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) return

      setUser(data.user)

      const { data: userData } = await supabase
        .from("users")
        .select("credits")
        .eq("id", data.user.id)
        .single()

      if (userData) {
        setCredits(userData.credits)
      }
    }

    loadUser()
  }, [])

  // 🔹 Generate website (streaming)
  const handleGenerate = async () => {
    if (!user) return
    if (credits <= 0) {
      alert("Geen credits meer.")
      return
    }

    setLoading(true)
    setWebsiteHTML("")

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        package: packageName,
        ...form,
      }),
    })

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) return

    let html = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      html += decoder.decode(value)
      setWebsiteHTML(html)
    }

    // 🔹 Refresh credits after generation
    const { data: userData } = await supabase
      .from("users")
      .select("credits")
      .eq("id", user.id)
      .single()

    if (userData) {
      setCredits(userData.credits)
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>🚀 AI Website Builder ({packageName.toUpperCase()})</h1>
      <p>Credits: {credits}</p>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Bedrijfsnaam"
          value={form.businessName}
          onChange={(e) =>
            setForm({ ...form, businessName: e.target.value })
          }
        />
        <input
          placeholder="Website type"
          value={form.websiteType}
          onChange={(e) =>
            setForm({ ...form, websiteType: e.target.value })
          }
        />
        <input
          placeholder="Doelgroep"
          value={form.doelgroep}
          onChange={(e) =>
            setForm({ ...form, doelgroep: e.target.value })
          }
        />
        <input
          placeholder="Stijl"
          value={form.style}
          onChange={(e) =>
            setForm({ ...form, style: e.target.value })
          }
        />
        <input
          placeholder="Kleur"
          value={form.color}
          onChange={(e) =>
            setForm({ ...form, color: e.target.value })
          }
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{ marginLeft: 10 }}
        >
          {loading ? "Genereren..." : "Website genereren"}
        </button>
      </div>

      {websiteHTML && (
        <div style={{ marginTop: 40 }}>
          <h2>Resultaat:</h2>
          <div
            dangerouslySetInnerHTML={{ __html: websiteHTML }}
          />
        </div>
      )}
    </div>
  )
}

export default function AIAgentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIAgentContent />
    </Suspense>
  )
}