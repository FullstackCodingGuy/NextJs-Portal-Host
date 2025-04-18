// import Link from "next/link";
// import { useRouter } from "next/router";

// export const MainNavigation = () => {
//   const router = useRouter();

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href="/">
//           <a className="text-2xl font-semibold dark:text-white">App</a>
//         </Link>
//         <ul className="flex space-x-4">
//           <li>
//             <Link href="/">
//               <a
//                 className={`${
//                   router.pathname === "/"
//                     ? "text-blue-700"
//                     : "text-gray-900"
//                 } hover:text-blue-500`}
//               >
//                 Home
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">
//               <a
//                 className={`${
//                   router.pathname === "/about"
//                     ? "text-blue-700"
//                     : "text-gray-900"
//                 } hover:text-blue-500`}
//               >
//                 About
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };