"use client";

import { useSession } from "@/lib/auth-client";
import {
    Bars,
    CircleDollar,
    LocationArrow,
    Plus,
    House,
    Ticket,
    Person,
    ClockArrowRotateLeft,
    PersonPlanetEarth,
    Files,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideBar = () => {
    const pathname = usePathname();
    const { data: session, isPending } = useSession();
    const user = session?.user;
    const role = user?.role;

    const route =
        role === "vendor"
            ? "vendor"
            : role === "admin"
            ? "admin"
            : "traveler";

    const navItemsVendor = [
        { icon: House, label: "Home", href: `/` },
        { icon: Person, label: "Profile", href: `/dashboard/${route}/profile` },
        { icon: Plus, label: "Add Ticket", href: `/dashboard/${route}/addticket` },
        { icon: Ticket, label: "My Tickets", href: `/dashboard/${route}/manage` },
        { icon: LocationArrow, label: "Bookings", href: `/dashboard/${route}/bookings` },
        { icon: CircleDollar, label: "Analytics", href: `/dashboard/${route}/analytics` },
    ];

    const navItemsAdmin = [
        { icon: House, label: "Home", href: `/` },
        { icon: Person, label: "Profile", href: `/dashboard/${route}/profile` },
        { icon: Ticket, label: "Manage Tickets", href: `/dashboard/${route}/manage-tickets` },
        { icon: PersonPlanetEarth, label: "Users", href: `/dashboard/${route}/manage-user` },
        { icon: Files, label: "Advertise", href: `/dashboard/${route}/advertise` },
    ];

    const navItemsTraveler = [
        { icon: House, label: "Home", href: `/` },
        { icon: Person, label: "Profile", href: `/dashboard/${route}/profile` },
        { icon: Ticket, label: "My Tickets", href: `/dashboard/${route}/myticket` },
        { icon: ClockArrowRotateLeft, label: "History", href: `/dashboard/${route}/history` },
    ];

    const navItems =
        role === "vendor"
            ? navItemsVendor
            : role === "admin"
            ? navItemsAdmin
            : navItemsTraveler;

    const NavLink = ({ item }) => {
        const active = pathname === item.href;

        return (
            <Link href={item.href} className="w-full">
                <div
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200
                    ${
                        active
                            ? "bg-indigo-500 text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                    <item.icon className="size-5" />
                    <span className="text-sm font-medium">
                        {item.label}
                    </span>
                </div>
            </Link>
        );
    };

    return (
        <Drawer>
            {/* MOBILE BUTTON */}
            <Button
                variant="secondary"
                className="flex md:hidden items-center gap-2"
            >
                <Bars />
                Menu
            </Button>

            {/* ================= DESKTOP SIDEBAR ================= */}
            <nav className="hidden md:flex flex-col h-screen w-64 border-r bg-white shadow-sm">

                {/* USER SECTION */}
                <div className="p-5 border-b bg-gradient-to-b from-gray-50 to-white">
                    <h2 className="text-xl font-bold text-gray-800">
                        Ticket Kino
                    </h2>

                    {isPending ? (
                        <p className="text-sm text-gray-500 mt-3">
                            Loading...
                        </p>
                    ) : (
                        <div className="mt-4 flex items-center gap-3">
                            <Image
                                src={user?.image || "/avatar.png"}
                                alt="user"
                                width={45}
                                height={45}
                                className="rounded-full border"
                            />

                            <div>
                                <p className="font-semibold text-gray-800 text-sm">
                                    {user?.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* NAV ITEMS */}
                <div className="flex-1 p-3 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink key={item.label} item={item} />
                    ))}
                </div>
            </nav>

            {/* ================= MOBILE DRAWER ================= */}
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger /> 
                        <Drawer.Header>
                            <Drawer.Heading>
                                Navigation
                            </Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <div className="mb-4">
                                <h2 className="font-bold text-lg">
                                    Ticket Kino
                                </h2>
                                <p className="text-xs text-gray-500">
                                    {user?.name}
                                </p>
                            </div>
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        item={item}
                                    />
                                ))}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
};

export default DashboardSideBar;