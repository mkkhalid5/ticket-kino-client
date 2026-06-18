"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "@heroui/react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const pathname = usePathname();

    const { data: session, isPending } = useSession();
    const user = session?.user;
    const navItems = [
        { name: "All Tickets", href: "/alltickets" },
        { name: "Dashboard", href: `${user?.role === "vendor" ? "/dashboard/vendor" : user?.role === "admin" ? "/dashboard/admin" : "/dashboard/traveler"}` },

    ];
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 shadow-lg">
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

                        <span className="text-2xl font-bold text-slate-800">
                            Ticket Kino
                        </span>
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
                                className={`font-medium text-slate-800 transition-colors hover:text-violet-600  ${pathname === item.href
                                    ? "text-violet-600 border-b-2"
                                    : "text-slate-800 hover:text-violet-600"
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
                                            src={user?.image || "/default-avatar.png"}
                                            alt="Profile"
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-12 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
                                            >
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

                                        <motion.button
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                                        >
                                            Get Started
                                        </motion.button>
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
                            className="absolute left-0 top-20 w-full border-t bg-white md:hidden"
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
                                            className="rounded-full"
                                        /></Link>
                                    
                                    <Link href={"/myprofile"}>My Profile</Link>
                                    <Button variant="danger">Logout</Button>
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

                                            <motion.button
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.96 }}
                                                className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                                            >
                                                Get Started
                                            </motion.button></>)}
                            </div>
                            <ul className="flex flex-col p-6">
                                {navItems.map((item) => (
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



