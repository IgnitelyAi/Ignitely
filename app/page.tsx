export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabase";

export default async function Home() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("test")
    .select("*");

  return <div>WORKING</div>;
}