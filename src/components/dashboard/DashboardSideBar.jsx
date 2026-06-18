"use client"
import DashboardRoute from "@/lib/action/user";
import { useSession } from "@/lib/auth-client";
import { Bars,CircleDollar, LocationArrow, Envelope, Plus, House, Ticket, Person, ClockArrowRotateLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";



const DashboardSideBar = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;
    const role = user?.role;
    const pathname = role === "vendor" ? "vendor": role === "admin" ? "admin" : "traveler";
    const navItemsVendor = [
        { icon: House, label: "Home", href: `/` },
        { icon: Person, label: "Profile", href: `/dashboard/${pathname}/profile` },
        { icon: Plus, label: "Add Ticket", href: `/dashboard/${pathname}/addticket` },
        { icon: Ticket, label: "My Added Tickets ", href: `/dashboard/${pathname}/manage` },
        { icon: LocationArrow, label: "Requested Bookings", href: `/dashboard/${pathname}/bookings` },
        { icon: CircleDollar, label: "Revenue Overview", href: `/dashboard/${pathname}/analytics` },

    ];
    const navItemsAdmin = [
        { icon: House, label: "Home", href: `/dashboard/` },
        { icon: Person, label: "Profile", href: `/dashboard/${pathname}/profile` },
        { icon: Ticket, label: "Manage Tickets", href: `/dashboard/${pathname}/manage-tickets` },
        { icon: Person, label: "Manage Users ", href: `/dashboard/${pathname}/manage-user` },
        { icon: LocationArrow, label: "Advertise Tickets", href: `/dashboard/${pathname}/bookings` },

    ];
    const navItemsTraveler = [
        { icon: House, label: "Home", href: `/` },
        { icon: Person, label: "Profile", href: `/dashboard/${pathname}/profile` },
        { icon: Ticket, label: "My Booked Tickets ", href: `/dashboard/${pathname}/myticket` },
        { icon: ClockArrowRotateLeft, label: "Transaction History", href: `/dashboard/${pathname}/history` },
    ];
    const navItems = role === "vendor" ? navItemsVendor : role === "admin" ? navItemsAdmin : navItemsTraveler ;
    return (
        <Drawer>
            <Button variant="secondary" className="flex md:hidden">
                <Bars />
                Menu
            </Button>
            <nav className="hidden md:flex flex-col gap-1 border-l border shadow">
                {isPending ? <div className="w-50">Loading</div> : <div className="p-4">
                    <h2 className="text-2xl font-bold mb-3 w-50">Ticket Kino</h2>
                    <Image
                        src={user.image || ""}
                        alt=""
                        width={60}
                        height={60}
                        className="rounded-full" />
                    <h2 className="font-semibold">{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>}
                {
                isPending? '' :navItems.map((item) => (
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