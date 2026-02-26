import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Header />

        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}