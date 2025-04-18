import Link from "next/link";
import "./globals.css";

export const MainNavigation = () => {
  return (
    <header className="p-4 flex gap-4">
      <h1 className="test-class">Good App</h1>
      <Link href="/">Shell Application</Link>
      <Link href="/home-estimation">Estimation</Link>
      <Link href="/home-market-analyser">Market Analyser</Link>
   
    </header>
  );
};
