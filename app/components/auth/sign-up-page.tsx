"use client";

import { signUpAction } from "@/app/api/route";

export default function SignUpPage() {
  return (
    <div>
      <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16 bg-[#474343] border border-[#565252] rounded-md shadow-lg shadow-[#3c3c3c] hover:translate-y-1 duration-500 text-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Create your account
            </h1>
            <p className="text-slate-300">Start your job search today.</p>
          </div>

          <form className="space-y-5" action={signUpAction}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                User Name
              </label>
              <input
                id="username"
                name="name"
                type="text"
                autoComplete="username"
                placeholder="Enter your username"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 text-[#474343]"
              />
            </div>
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
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 text-[#474343]"
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
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 text-[#474343]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#585757] px-4 py-3 text-sm font-semibold text-white shadow-sm duration-400 hover:bg-[#515151] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
