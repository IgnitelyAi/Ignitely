import { supabase } from "@/lib/supabase";

export default async function Home() {
  if (!supabase) {
    return <div>Supabase not configured</div>;
  }

  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}