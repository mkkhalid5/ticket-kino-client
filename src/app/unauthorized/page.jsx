import { getUserSession } from '@/lib/api/session';
import Link from 'next/link';
import React from 'react';

const Unauthorized = async () => {
    const user = await getUserSession();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
            <div className="max-w-md w-full rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 text-center shadow-2xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20">
                    <span className="text-5xl">🚫</span>
                </div>

                <h1 className="mt-6 text-4xl font-bold text-white">
                    403
                </h1>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                    Access Denied
                </h2>

                <p className="mt-4 text-gray-300 leading-relaxed">
                    You are not authorized to access this page.
                    <br />
                    Please sign in with an account that has the required permissions.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Go Home
                    </Link>

                    <Link
                        href={`/dashboard/${user.role}`}
                        className="rounded-xl border border-gray-500 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;