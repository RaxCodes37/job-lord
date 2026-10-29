import { signInAction } from "@/app/api/route";

export default function SignInPage() {
  return (
    <div>
      <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16 border border-[#e3e3e3] rounded-md shadow-lg shadow-[#e3e3e3] hover:translate-y-1 duration-500">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sign in to your account
            </h1>
            <p className="mt-3 text-slate-500">
              Pick up where you left off in your job search.
            </p>
          </div>

          <form className="space-y-5" action={signInAction}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#3f3f3f] px-4 py-3 text-sm font-semibold text-white shadow-sm duration-400 hover:bg-[#515151]"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
