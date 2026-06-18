"use client"
import { useSession } from "@/lib/auth-client";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideBar = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;
    const pathname = usePathname();
    const navItems = [
        { icon: House, label: "Home", href: `${pathname}` },
        { icon: Magnifier, label: "Manage Tickets", href: `${pathname}/manage` },
        { icon: Bell, label: "Analytics", href: `${pathname}/analytics` },
        { icon: Envelope, label: "Booking Requests", href: `${pathname}/bookings` },
        { icon: Person, label: "Add Ticket", href: `${pathname}/addticket` },
    ];
    return (
        <Drawer>
            <Button variant="secondary" className="flex md:hidden">
                <Bars />
                Menu
            </Button>
            <nav className="hidden md:flex flex-col gap-1 border-l border shadow">
                {isPending ? "Loading" : <div className="p-4">
                    <h2 className="text-2xl font-bold mb-3">Dashboard (<span className="text-xl text-gray-700 font-medium">{user?.role}</span>)</h2>
                    <Image
                        src={user.image || ""}
                        alt=""
                        width={60}
                        height={60}
                        className="rounded-full" />
                    <h2 className="font-semibold">{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>}
                {navItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                        <button

                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                            type="button"
                        >
                            <item.icon className="size-5 text-muted" />
                            {item.label}
                        </button></Link>
                ))}
            </nav>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                        type="button"
                                    >
                                        <item.icon className="size-5 text-muted" />
                                        {item.label}
                                    </button>
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