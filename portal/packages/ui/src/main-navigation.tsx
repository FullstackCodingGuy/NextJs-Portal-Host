import Link from "next/link";

export const MainNavigation = () => {
  return (
    <header className="bg-red-100 p-4 flex gap-4">
      <Link href="/">Shell Application</Link>
      <Link href="/home-estimation">Estimation</Link>
      <Link href="/home-market-analyser">Market Analyser</Link>
    </header>
  );
};
