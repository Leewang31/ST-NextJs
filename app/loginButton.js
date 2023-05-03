"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  return (
    <button
      onClick={() => {
        console.log(session);
        if (session === null) {
          signIn();
        } else {
          signOut();
        }
      }}
    >
      {session ? "logout" : "login"}
    </button>
  );
}
