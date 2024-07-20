"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbtn from "./Navbtn";
import "../app/globals.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const list = ["Home", "About", "Contact"];

  return (
    <nav className="px-20 flex h-20 w-screen justify-between items-center bg-black">
      <div className="flex gap-2">
        <Image src="/logo.jpeg" height={50} width={55} className="h-10 w-12" />
        <h1 className="text-2xl font-extrabold text-white glow-twinkle">
          Fund-me
        </h1>
      </div>
      <ul className="flex gap-8 items-center text-white">
        {list.map((item, key) => {
          return (
            <li key={key}>
              <Link href="/">{item}</Link>
            </li>
          );
        })}
        <li>
          {session ? (
            <Link onClick={()=>{signOut()}}>
              <Navbtn text="Logout" />
            </Link>
          ) : (
            <Link href="/login">
              <Navbtn text="Login" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
