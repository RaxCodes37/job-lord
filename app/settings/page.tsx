import { signOutAction } from "@/app/api/route";

export default function Settings() {
  return (
    <div className="h-screen bg-[#1c1c1c] text-white">
      <div className="mx-auto w-full max-w-2xl p-6">
        <h1 className="mb-6 text-2xl font-semibold">Settings</h1>
        <section className="border border-[#605252] rounded-md bg-[#3e3939] p-6">
          <h2 className="text-lg font-medium">Account</h2>
          <p className="mt-2 text-sm">
            Sign out of your account on this device.
          </p>
          <form action={signOutAction} className="mt-4">
            <button
              type="submit"
              className="rounded-md border border-[#e67474] bg-[#c35353] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a54242]"
            >
              Sign out
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
