import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

export default function Navbar() {
  return (
    <nav className="px-20 flex h-20 w-screen justify-between items-center bg-black">
      <div className="flex gap-2">
        <Image src="/logo.jpeg" height={50} width={55} className="h-10 w-12" />
        <h1 className="text-2xl font-extrabold text-white glow-twinkle">
          Fund-me
        </h1>
      </div>
      <ul className="flex gap-8 items-center text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/login">
            <button class="relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <button class="relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Signup
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
