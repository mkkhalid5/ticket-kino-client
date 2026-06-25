import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you`re looking for doesn`t exist, has been moved,
          or the URL may be incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            ✈️ Safe travels with Ticket Kino
          </div>
        </div>
      </div>
    </div>
  );
}