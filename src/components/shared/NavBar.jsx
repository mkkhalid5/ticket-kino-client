"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const pathname = usePathname();

    const handleSignOut = async () => {
        await authClient.signOut();
        window.location.reload();
    }

    const { data: session, isPending } = useSession();
    const user = session?.user;
    if (pathname.includes('dashboard')) {
        return null;
    }

    const dashboardLink = user
        ? user.role === "vendor"
            ? "/dashboard/vendor"
            : user.role === "admin"
                ? "/dashboard/admin"
                : "/dashboard/traveler"
        : "/auth/signin";

    const navItems = [
        { name: "Home", href: "/" },
        { name: "All Tickets", href: "/alltickets" },
        { name: "Dashboard", href: dashboardLink },
    ];
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path d="M2 16L22 2L13 22L11 13L2 16Z" />
                            </svg>
                        </div>

                        <span className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Ticket Kino</span>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <motion.li
                            key={item.name}
                            whileHover={{ y: -2 }}
                        >
                            <Link
                                href={item.href}
                                className={`px-4 py-2 rounded-xl transition-all ${pathname === item.href ? "bg-violet-100 text-violet-700" : "text-slate-700 hover:bg-slate-100"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Right */}
                {
                    isPending ? "Loading" : (<div className="hidden items-center gap-5 md:flex relative">
                        {
                            user ? (
                                <>
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="text-slate-700"
                                    >
                                        <Image
                                            src={user?.image}
                                            alt="Profile"
                                            width={40}
                                            height={40}
                                            className="rounded-full ring-2 ring-violet-200 hover:ring-violet-400 transition"
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-14 w-60 overflow-hidden rounded-2xl border bg-white shadow-xl"
                                            >
                                                <div className="px-4 py-3 border-b">
                                                    <p className="font-semibold">{user?.name}</p>
                                                    <p className="text-xs text-slate-500 truncate">
                                                        {user?.email}
                                                    </p>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link
                                                            href="/myprofile"
                                                            className="block px-4 py-3 text-sm text-slate-800 hover:bg-gray-100"
                                                        >
                                                            My Profile
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <button
                                                            onClick={handleSignOut}
                                                            className="w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-red-50"
                                                        >
                                                            Logout
                                                        </button>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>)

                                : (
                                    <><Link
                                        href="/auth/signin"
                                        className={`font-medium text-slate-800 hover:text-violet-600 ${pathname === "/auth/signin" ?
                                            "text-violet-600 border-b-2" :
                                            "text-slate-800 hover:text-violet-600"}`}
                                    >
                                        Sign In
                                    </Link>

                                        <Link
                                            href="/auth/signup"
                                            className={`font-medium text-slate-800 hover:text-violet-600 ${pathname === "/auth/signup" ?
                                                "text-violet-600 border-b-2" :
                                                "text-slate-800 hover:text-violet-600"}`}
                                        >
                                            Sign Up
                                        </Link>
                                    </>)}
                    </div>)
                }
                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center md:hidden"
                >
                    {isPending ? "Loading" : <div className="space-y-1.5">
                        <motion.span
                            animate={
                                isOpen
                                    ? { rotate: 45, y: 7 }
                                    : { rotate: 0, y: 0 }
                            }
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                        <motion.span
                            animate={
                                isOpen
                                    ? { opacity: 0 }
                                    : { opacity: 1 }
                            }
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                        <motion.span
                            animate={
                                isOpen
                                    ? { rotate: -45, y: -7 }
                                    : { rotate: 0, y: 0 }
                            }
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                    </div>}
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-4 right-4 top-24 rounded-2xl border bg-white shadow-xl overflow-hidden md:hidden"
                        >
                            <div className="flex relative items-center justify-around gap-5 mx-auto px-6 pt-6">
                                {user ?
                                    (<>
                                        <Link href={"/myprofile"}><Image
                                            src={user?.image || <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M20 21a8 8 0 10-16 0" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>}
                                            alt="Profile"
                                            width={32}
                                            height={32}
                                            className="rounded-full ring-2 ring-violet-200 hover:ring-violet-400 transition"
                                        /></Link>
                                        <Link href={"/myprofile"}>My Profile</Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-red-50"
                                        >Logout</button>
                                    </>)
                                    : (
                                        <><Link
                                            href="/auth/signin"
                                            className={`font-medium text-slate-800 hover:text-violet-600 ${pathname === "/auth/signin" ?
                                                "text-violet-600 border-b-2" :
                                                "text-slate-800 hover:text-violet-600"}`}
                                        >
                                            Sign In
                                        </Link>
                                            <Link href="/auth/signup" className={`font-medium text-slate-800 hover:text-violet-600 ${pathname === "/auth/signup" ? "text-violet-600 border-b-2" : "text-slate-800 hover:text-violet-600"}`} >Sign Up</Link></>)}
                            </div>
                            <ul className="flex flex-col p-6">
                                {navItems.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`font-medium text-slate-800 transition-colors hover:text-violet-600  ${pathname === item.href
                                                ? "text-violet-600 border-b-2"
                                                : "text-slate-800 hover:text-violet-600"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default NavBar;



