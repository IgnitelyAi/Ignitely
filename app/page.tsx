"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("test")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Connected</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}