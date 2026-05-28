import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-[340px] p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl text-center">

        <div className="text-5xl mb-4">🎓</div>

        <h1 className="text-4xl font-bold text-white leading-tight">
          School
          <br />
          Event Planner
        </h1>

        <p className="text-white/80 mt-5 mb-8">
          Welcome to your system
        </p>

        <div className="flex flex-col gap-4">

          <Link
  href="/login"
  className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-2xl hover:scale-105 transition block text-center"
>
  Login
</Link>

          <Link
  href="/register"
  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-2xl hover:scale-105 transition block text-center"
>
  Register
</Link>

        </div>
      </div>
    </main>
  );
}