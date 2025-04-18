import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-gray-100 p-4 flex gap-4">
          <Link href="/">🏠 Shell Application</Link>
          <Link href="/home-estimation">Estimation</Link>
          <Link href="/home-market-analyser">Market Analyser</Link>
        </header>
    </div>
  );
}
