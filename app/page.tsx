import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Supabase connectie test</h1>

      {error && (
        <p style={{ color: "red" }}>
          Error: {error.message}
        </p>
      )}

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}

