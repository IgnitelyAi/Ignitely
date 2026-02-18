import { getSupabase } from "@/lib/supabase";

export default async function Home() {
  const supabase = getSupabase();

  if (!supabase) {
    return <div>Supabase not configured</div>;
  }

  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}