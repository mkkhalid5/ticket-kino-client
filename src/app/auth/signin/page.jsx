
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PersonPlus, Envelope, Lock, Eye, EyeSlash, ArrowRight } from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

// import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log({
                ...formData,
            });

            const { data, error } = await authClient.signIn.email({
                email: formData.email, // required
                password: formData.password, // required
                rememberMe: true,
                callbackURL: "/",
            });
            console.log("Sign-in response:", { data, error });
            if(error){
                toast.error(error?.message || "signin failed try again");
            }
            if(data){
                toast.success("Login Successfull..");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
          provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl"
            >
                {/* Header */}

                <div className="mb-8">
                    <h1 className="text-5xl font-bold text-slate-900">
                        Welcome back!
                    </h1>

                    <p className="mt-3 text-lg text-slate-500">

                        Sign in to your account
                    </p>
                </div>

                {/* Social Buttons */}

                <div className="grid gap-10">
                    <button
                        onClick={handleGoogleLogin}
                        className="border rounded-2xl py-4 font-medium hover:bg-slate-50 transition"
                    >
                        Google
                    </button>
                </div>

                {/* Divider */}

                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-sm text-slate-400">
                        or sign in with email
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}

                    <div>
                        <label className="mb-2 block font-semibold text-slate-800">
                            Email Address
                        </label>

                        <div className="relative">
                            <Envelope
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-2xl border px-12 py-4 outline-none focus:border-violet-500"
                            />
                        </div>
                    </div>

                    {/* Password */}

                    <div>
                        <label className="mb-2 block font-semibold text-slate-800">
                            Password
                        </label>

                        <div className="relative">
                            <Lock
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                placeholder="Min. 8 characters"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-2xl border px-12 py-4 pr-14 outline-none focus:border-violet-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                            >
                                {showPassword ? (
                                    <EyeSlash size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white"
                    >
                        Sign In
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                {/* Footer */}

                <p className="mt-6 text-center text-sm text-slate-500">
                    By signing up you agree to our{" "}
                    <Link
                        href="/terms"
                        className="text-violet-600"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="text-violet-600"
                    >
                        Privacy Policy
                    </Link>
                </p>

                <p className="mt-4 text-center text-sm text-slate-500">
                    Don`t have an account?{" "}
                    <Link
                        href="/auth/signup"
                        className="font-semibold text-violet-600"
                    >
                        Sign Up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default SignInPage;