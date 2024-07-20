"use client";
import Socialbtns from "@/components/Socialbtns";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function () {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="text-white bg-inherit min-h-screen flex flex-col items-center py-16">
        <Socialbtns />
      </div>
    );
  }
  return (
    <div className="text-white bg-inherit min-h-screen flex flex-col items-center py-16">
      <h1 className="text-3xl font bold">Welcome {session.user.email}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
