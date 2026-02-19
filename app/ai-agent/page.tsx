"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AIAgentPage() {
  const searchParams = useSearchParams()
  const packageName = searchParams.get("package") || "free"

  const [user, setUser] = useState<any>(null)
  const [credits, setCredits] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [websiteHTML, setWebsiteHTML] = useState("")
  const [chatMessage, setChatMessage] = useState("")

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

      if (userData) setCredits(userData.credits)
    }

    loadUser()
  }, [])

  // 🔥 GENERATE WEBSITE
  const generateWebsite = async () => {
    if (!user) return alert("Niet ingelogd")

    setWebsiteHTML("")
    setLoading(true)

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessName: form.businessName,
        websiteType: form.websiteType,
        doelgroep: form.doelgroep,
        style: form.style,
        color: form.color,
        packageName,
        userId: user.id,
      }),
    })

    if (!response.body) {
      alert("Fout bij genereren")
      setLoading(false)
      return
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let html = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      html += decoder.decode(value)
      setWebsiteHTML(html)
    }

    setCredits((prev) => prev - 1)
    setLoading(false)
  }

  // 🔥 EDIT WEBSITE
  const editWebsite = async () => {
    if (!chatMessage || !user) return

    const response = await fetch("/api/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentHTML: websiteHTML,
        message: chatMessage,
        userId: user.id,
      }),
    })

    if (!response.body) return

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let html = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      html += decoder.decode(value)
      setWebsiteHTML(html)
    }

    setChatMessage("")
    setCredits((prev) => prev - 1)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">
        🚀 AI Website Builder ({packageName.toUpperCase()})
      </h1>

      <p className="mb-4 text-gray-400">Credits: {credits}</p>

      {/* FORM */}
      <div className="grid gap-4 max-w-xl">
        <input
          placeholder="Bedrijfsnaam"
          className="p-2 rounded bg-gray-800"
          onChange={(e) =>
            setForm({ ...form, businessName: e.target.value })
          }
        />
        <input
          placeholder="Wat voor website?"
          className="p-2 rounded bg-gray-800"
          onChange={(e) =>
            setForm({ ...form, websiteType: e.target.value })
          }
        />
        <input
          placeholder="Doelgroep"
          className="p-2 rounded bg-gray-800"
          onChange={(e) =>
            setForm({ ...form, doelgroep: e.target.value })
          }
        />
        <input
          placeholder="Stijl (modern, strak...)"
          className="p-2 rounded bg-gray-800"
          onChange={(e) =>
            setForm({ ...form, style: e.target.value })
          }
        />
        <input
          placeholder="Kleur"
          className="p-2 rounded bg-gray-800"
          onChange={(e) =>
            setForm({ ...form, color: e.target.value })
          }
        />

        <button
          type="button"
          onClick={generateWebsite}
          className="bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          {loading ? "Genereren..." : "Website genereren"}
        </button>
      </div>

      {/* WEBSITE PREVIEW */}
      {websiteHTML && (
        <div className="mt-10 bg-white text-black p-4 rounded">
          <div
            dangerouslySetInnerHTML={{ __html: websiteHTML }}
          />
        </div>
      )}

      {/* CHAT EDITOR */}
      {websiteHTML && (
        <div className="mt-6 max-w-xl">
          <h2 className="text-xl font-bold mb-2">💬 AI Editor</h2>
          <div className="flex gap-2">
            <input
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Vraag aanpassing..."
              className="flex-1 p-2 rounded bg-gray-800"
            />
            <button
              type="button"
              onClick={editWebsite}
              className="bg-green-600 px-4 rounded"
            >
              Verstuur
            </button>
          </div>
        </div>
      )}
    </div>
  )
}