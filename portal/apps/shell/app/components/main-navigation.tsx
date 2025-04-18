// "use client"; // Required at the top

// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export const MainNavigation = () => {
//   const pathname = usePathname(); // Use usePathname instead of useRouter for Next.js 13

//   const menus = [
//     { name: "Home", path: "/" },
//     { name: "Estimator", path: "/home-estimation" },
//     { name: "Analyser", path: "/home-market-analyser" },
//   ];

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-6">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href="/" className="text-2xl font-semibold dark:text-white">
//           Shell App
//         </Link>
//         <ul className="flex space-x-4 gap-4">
//           {menus.map((menu) => (
//             <li key={menu.name}>
//               <Link
//                 href={menu.path}
//                 className={`${
//                   pathname === menu.path ? "text-blue-700" : "text-gray-900"
//                 } hover:text-blue-500`}
//               >
//                 {menu.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };
