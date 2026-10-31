"use client";

import { signOutAction } from "@/app/api/route";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Settings() {
  const router = useRouter();

  return (
    <div className="h-screen bg-[#1c1c1c] text-white">
      <div className="mx-auto w-full max-w-2xl p-6">
        <div className="flex justify-between">
          <h1 className="mb-6 text-2xl font-semibold">Settings</h1>

          <button
            onClick={router.back}
            className="border border-[#605252] rounded-md bg-[#3e3939] h-10 px-3"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="border border-[#605252] rounded-md bg-[#3e3939]">
          <section className="p-5">
            <h2 className="text-lg font-medium">Go to Posting Account</h2>
            <p className="mt-1 text-sm text-[#838282]">
              Start posting jobs from your posting account.
            </p>
            <button className="mt-4 border border-[#838282] rounded-md bg-[#353030] px-4 py-2 text-sm font-semibold duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]">
              Go Post
            </button>
          </section>
          <hr className="my-2 text-[#605252]" />
          <section className="p-5">
            <h2 className="text-lg font-medium">Account</h2>
            <p className="mt-1 text-sm text-[#838282]">
              Sign out of your account on this device.
            </p>
            <form action={signOutAction} className="mt-4">
              <button
                type="submit"
                className="rounded-md border border-[#e67474] bg-[#c35353] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a54242]"
              >
                Sign Out
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
