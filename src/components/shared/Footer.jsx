"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Envelope,
    LocationArrow,
    CircleInfo,
} from "@gravity-ui/icons";


const Footer = () => {
    const pathname = usePathname();
    const { data: session } = useSession();
    const user = session?.user;

    if (pathname.includes("dashboard")) {
        return null;
    }

    const dashboardLink =
        user?.role === "vendor"
            ? "/dashboard/vendor"
            : user?.role === "admin"
                ? "/dashboard/admin"
                : "/dashboard/traveler";

    return (
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Ticket Kino
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Your trusted travel booking platform.
                            Discover routes, reserve seats and travel
                            confidently with secure ticket management.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                href="/"
                                className="text-slate-500 hover:text-blue-600 transition"
                            >
                                Home
                            </Link>
                            <Link
                                href="/alltickets"
                                className="text-slate-500 hover:text-blue-600 transition"
                            >
                                All Tickets
                            </Link>
                            <Link
                                href={dashboardLink}
                                className="text-slate-500 hover:text-blue-600 transition"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/myprofile"
                                className="text-slate-500 hover:text-blue-600 transition"
                            >
                                My Profile
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">
                            Contact
                        </h3>
                        <div className="space-y-3 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Envelope size={16} />
                                <span>support@ticketkino.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LocationArrow size={16} />
                                <span>Rajshahi, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">
                            Payment
                        </h3>
                        <div className="rounded-xl border bg-slate-50 p-4">
                            <div className="flex items-center gap-2">
                                <CircleInfo size={16} />
                                <span className="font-medium">
                                    Stripe Payment Gateway
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">
                                Fast and secure online payments with
                                industry-standard protection.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Ticket Kino.
                        All rights reserved.
                    </p>
                    <div className="flex gap-5 text-sm">
                        <Link
                            href="/privacy"
                            className="text-slate-500 hover:text-blue-600"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-slate-500 hover:text-blue-600"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;