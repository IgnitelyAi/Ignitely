import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Welcome to Ignite</h1>

      <div style={{ marginTop: "20px" }}>
        <Link href="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </Link>

        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </main>
  );
}