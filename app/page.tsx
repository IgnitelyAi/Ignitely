export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabase";

export default async function Home() {
  const supabase = getSupabase();

  if (!supabase) {
    return <div>Supabase not configured</div>;
  }

  const { data, error } = await supabase
    .from("test")
    .select("*");

  if (error) {
    return <div>Database error</div>;
  }

  return (
    <div>
      <h1>WORKING</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}