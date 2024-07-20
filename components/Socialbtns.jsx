"use client";
import React from "react";
import Image from "next/image";
import LoginBtns from "./LoginBtns";
import Link from "next/link";

export default function Socialbtns() {
  return (
    <div className="h-screen w-screen bg-gray-400">
      <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
        <div className="relative container m-auto px-6">
          <div className="m-auto md:w-7/12">
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Image
                      src="/logo.jpeg"
                      height={50}
                      width={55}
                      className="h-10 w-12"
                    />
                    <h1 className="text-2xl font-extrabold text-white glow-twinkle">
                      Fund-me
                    </h1>
                  </div>
                  <h2 className="mb-8 text-2xl text-cyan-900 dark:text-white font-bold">
                    Log in to start <br />
                    something new.
                  </h2>
                </div>
                <div className="mt-10 grid space-y-4">
                  <LoginBtns />
                  <Link href="/">
                    <span className="hover:border-b-2 hover:border-white">
                      Back to homepage
                    </span>
                  </Link>
                </div>
                <div className="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                  <p className="text-xs">
                    By proceeding, you agree to our &nbsp;
                    <a href="/privacy-policy/" className="underline">
                      Terms of Use
                    </a>
                    &nbsp; and confirm you have read our &nbsp;
                    <a href="/privacy-policy/" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
