import Link from "next/link";
import {
    Card,
    Chip,
    Button
} from "@heroui/react";

const BookingCard = ({ booking, date, countdown }) => {
    console.log('cc', countdown);

    const transportColor = {
        bus: "warning",
        train: "primary",
        airplane: "secondary"
    };

    return (
        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            {/* Top Image Area */}
            <div className="relative h-40 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
                <img
                    src={`https://picsum.photos/500/300?random=${booking._id}`}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-3 left-3 flex gap-2">
                    <Chip
                        size="sm"
                        color={transportColor[booking.transportType]}
                    >
                        {booking.transportType}
                    </Chip>
                    <Chip
                        size="sm"
                        color={
                            booking.ticketStatus === "approved"
                                ? "success"
                                : booking.ticketStatus === "cancelled"
                                    ? "danger"
                                    : "warning"
                        }
                    >
                        {booking.ticketStatus}
                    </Chip>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold">
                        {booking.fromLocation}
                        {" → "}
                        {booking.toLocation}
                    </h2>
                    <p className="text-sm opacity-80">
                        {booking.ticketTitle}
                    </p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-2xl font-bold">
                    <p>৳{booking.totalCost}</p>
                    <p className="text-gray-400 text-xl font-medium">Seat {booking.totalBuy}</p>
                </div>
            </div>
            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between mb-4">
                    <div>
                        <p className="text-xs text-default-500"> Departure </p>
                        <h4 className="font-semibold"> {countdown} </h4>
                    </div>
                    <div className="flex-1 mx-4 mt-4">
                        <div className="h-1 bg-default-200 rounded-full relative">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 size-3 rounded-full bg-primary" />
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-default-500"> Date </p>
                        <h4 className="font-semibold"> {booking.date}</h4>
                        <h4 className="font-semibold"> {date(booking.time)}</h4>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="text-xs text-default-500"> Vendor </p>
                        <h4 className="font-medium"> {booking.vendorName} </h4>
                    </div>
                    <div>
                        <p className="text-xs text-default-500"> Perks </p>
                        <h4 className="font-medium"> {booking.perks} </h4>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    {
                        countdown === "Expired" ? <p className="bg-red-50 text-red-500 px-2 rounded-2xl font-semibold">Ticket Expired</p> : booking.ticketStatus === "pending" ? <p className="bg-amber-50 text-amber-500 px-2 rounded-2xl">Please waiting for approval</p> : booking.ticketStatus === "rejected" ? <p className="bg-red-50 text-red-500 px-2 rounded-2xl">Ticket Rejected</p> : <Button variant="flat" size="sm">Proceed to pay</Button>}
                    <Link href={`/alltickets/${booking._id}`}>
                        <Button color="primary" size="sm">Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;