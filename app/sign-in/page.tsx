import React from "react";
import SignInPage from "../components/auth/sign-in-page";
import SignUpPage from "../components/auth/sign-up-page";

export default function SignIn() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="flex items-center justify-center bg-white p-8">
        <SignInPage />
      </div>
      <div className="flex items-center justify-center  border-[#a4a1a1] border-y-0 border-r-0 bg-[#333131] p-8">
        <SignUpPage />
      </div>
    </main>
  );
}
