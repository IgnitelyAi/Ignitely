export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}