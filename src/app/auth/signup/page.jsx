
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PersonPlus, Envelope, Lock, Eye, EyeSlash, ArrowRight, Picture } from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/dist/server/api-utils";


// import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
    const [userType, setUserType] = useState("vendor");
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
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
                role: userType,
            });

            const { data, error } = await authClient.signUp.email({
                name: formData.fullName,// required
                email: formData.email, // required
                password: formData.password,
                role: userType, // required
                image: "",
                callbackURL: "/",
            });
            console.log("Signup response:", { data, error });
            if (error) {
                toast.error(error?.message || "signup failed try again");
            }
            if(data){
                toast.success("Signup Successfull");
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

                <div className="mb-8">
                    <h1 className="text-5xl font-bold text-slate-900">
                        Create your account
                    </h1>

                    <p className="mt-3 text-lg text-slate-500">
                        Free forever. No credit card required.
                    </p>
                </div>

                <div className="mb-8 rounded-2xl bg-slate-100 p-1 flex">
                    <button
                        onClick={() => setUserType("traveler")}
                        className={`flex-1 rounded-xl py-3 font-medium transition ${userType === "traveler"
                            ? "bg-white shadow text-slate-900"
                            : "text-slate-500"
                            }`}
                    >
                        Traveler
                    </button>

                    <button
                        onClick={() => setUserType("vendor")}
                        className={`flex-1 rounded-xl py-3 font-medium transition ${userType === "vendor"
                            ? "bg-white shadow text-slate-900"
                            : "text-slate-500"
                            }`}
                    >
                        Vendor
                    </button>
                </div>

                <div className="grid">
                    <button
                        onClick={handleGoogleLogin}
                        className="border rounded-2xl py-4 font-medium hover:bg-slate-50 transition"
                    >
                        Google
                    </button>
                </div>

                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-sm text-slate-400">
                        or sign up with email
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-2 block font-semibold text-slate-800">
                            Full Name
                        </label>

                        <div className="relative">
                            <PersonPlus
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                name="fullName"
                                placeholder="MK Khalid"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full rounded-2xl border px-12 py-4 outline-none focus:border-violet-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-slate-800">
                            Image Url
                        </label>

                        <div className="relative">
                            <Picture
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                name="image"
                                placeholder="image url"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full rounded-2xl border px-12 py-4 outline-none focus:border-violet-500"
                            />
                        </div>
                    </div>

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
                        Create Account
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
                    Already have an account?{" "}
                    <Link
                        href="/auth/signin"
                        className="font-semibold text-violet-600"
                    >
                        Sign In
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default SignupPage;