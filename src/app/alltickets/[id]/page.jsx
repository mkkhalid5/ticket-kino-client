import { getTicketById } from "@/lib/api/latest-tickets";
import { getUserSession } from '@/lib/api/session';
import Link from "next/link";
import { Card, Chip, Button } from "@heroui/react";
import {
    Plane,
    Calendar,
    Clock,
    LocationArrow,
    User,
    Envelope,
    TagDollar,
} from "@gravity-ui/icons";
import Image from "next/image";
import { getUserByEmail } from "@/lib/api/users";
import BookNowHandle from "@/components/tickets/BookNowHandle";
import { Fragment } from "react";


const TicketDetails = async ({ params }) => {
    const { id } = await params;
    const tickets = await getTicketById(id);
    const user = await getUserSession();
    const userDetails = await getUserByEmail(user.email);
    console.log('tt', tickets);
    console.log('t', tickets.adminApproval);

    const vendor = await getUserByEmail(tickets[0].vendorEmail);
    console.log("vendor", vendor);

    return (
        <div className="max-w-7xl mx-auto p-6 lg:p-10">
            <Link
                href="/alltickets"
                className="inline-flex items-center gap-2 mb-8 bg-default-100 hover:bg-default-200 px-5 py-3 rounded-xl transition"
            >
                ← Back to all tickets
            </Link>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    tickets.map(ticket => <Fragment key={ticket._id}>
                        <div key={ticket._id} className="lg:col-span-2 space-y-6">
                            {/* HERO CARD */}
                            <Card className="border shadow-sm">
                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                                        <div>
                                            <Chip
                                                color="success"
                                                variant="flat"
                                                className="mb-4"
                                            >
                                                {ticket.adminApproval}
                                            </Chip>

                                            <h1 className="text-4xl font-bold">
                                                {ticket.ticketTitle}
                                            </h1>

                                            <p className="text-default-500 mt-2">
                                                {ticket.transportType} • Flight Ticket
                                            </p>

                                            <div className="flex flex-wrap gap-3 mt-5">
                                                <Chip color="secondary" variant="flat">
                                                    {ticket.transportType}
                                                </Chip>

                                                {ticket.advertise === "true" && (
                                                    <Chip color="success" variant="flat">
                                                        Advertised
                                                    </Chip>
                                                )}

                                                <Chip color="warning" variant="flat">
                                                    {ticket.perks}
                                                </Chip>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <div className="size-40 rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                                                <Plane className="w-20 h-20 text-violet-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ROUTE */}
                                    <div className="mt-10 bg-violet-50 rounded-2xl p-6">
                                        <div className="grid grid-cols-3 items-center">
                                            <div>
                                                <p className="text-default-500 text-sm">From</p>
                                                <h3 className="text-2xl font-bold">
                                                    {ticket.fromLocation}
                                                </h3>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="text-4xl">✈️</div>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-default-500 text-sm">To</p>
                                                <h3 className="text-2xl font-bold">
                                                    {ticket.toLocation}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* DETAILS */}
                            <Card>
                                <div className="p-8">
                                    <h3 className="text-xl font-semibold mb-6">
                                        Flight Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="bg-default-50 p-5 rounded-2xl">
                                            <Calendar />
                                            <p className="text-default-500 mt-2">Date</p>
                                            <h4 className="font-semibold">
                                                {ticket.date}
                                            </h4>
                                        </div>

                                        <div className="bg-default-50 p-5 rounded-2xl">
                                            <Clock />
                                            <p className="text-default-500 mt-2">Time</p>
                                            <h4 className="font-semibold">
                                                {ticket.time}
                                            </h4>
                                        </div>

                                        <div className="bg-default-50 p-5 rounded-2xl">
                                            <LocationArrow />
                                            <p className="text-default-500 mt-2">From</p>
                                            <h4 className="font-semibold">
                                                {ticket.fromLocation}
                                            </h4>
                                        </div>

                                        <div className="bg-default-50 p-5 rounded-2xl">
                                            <LocationArrow />
                                            <p className="text-default-500 mt-2">To</p>
                                            <h4 className="font-semibold">
                                                {ticket.toLocation}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            {/* PRICE */}
                            <Card>
                                <div className="p-7">
                                    <h3 className="font-semibold mb-4">
                                        Pricing Summary
                                    </h3>
                                    <div className="text-5xl font-bold text-violet-600">
                                        ৳{ticket.price}
                                    </div>
                                    <p className="text-default-500 mt-1">
                                        per ticket
                                    </p>
                                    <div className="flex justify-between py-2">
                                        <span>Quantity</span>
                                        <span>{ticket.quantity}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span>
                                            ৳
                                            {Number(ticket.price) *
                                                Number(ticket.quantity)}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                            <BookNowHandle key={ticket._id} ticket={ticket} userDetails={userDetails} />
                            <Card>
                                <div className="p-7">
                                    <h3 className="font-semibold mb-5">
                                        Vendor Information
                                    </h3>

                                    <Image src={vendor[0]?.image} alt={vendor[0]?.name} height={200} width={200} className="size-20 rounded-full bg-violet-100 mx-auto mb-4" />

                                    <h4 className="font-semibold text-center">
                                        {ticket.vendorName}
                                    </h4>
                                    <p className="text-default-500 text-center">
                                        {ticket.vendorEmail}
                                    </p>
                                </div>
                            </Card>

                            <Card>
                                <div className="p-7 space-y-4">
                                    <div className="flex justify-between">
                                        <span>Perks</span>
                                        <span className="font-medium">
                                            {ticket.perks}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Advertise</span>
                                        <Chip color={ticket.advertise === "true" ? "success" : "danger"} size="sm">{ticket.advertise}</Chip>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Status</span>
                                        <Chip color="success" size="sm">{ticket.adminApproval}</Chip>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>ID</span>
                                        <span className="text-xs">
                                            {ticket._id}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Fragment>)}
            </div>
        </div>
    );
};
export default TicketDetails;