import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const TicketCard = ({ ticket }) => {


    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all">
            <div className="relative h-80">
                <Image
                    src={ticket.image}
                    alt={ticket.toLocation}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <Chip
                    color="primary"
                    size="sm"
                    className="absolute top-4 left-4"
                >
                    {ticket.transportType}
                </Chip>
                <div className="absolute bottom-4 right-4">
                    <h2 className="text-white text-3xl font-bold">
                        ৳{ticket.price}
                    </h2>
                </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold text-xl">
                            {ticket.fromLocation} →
                            {" "}
                            {ticket.toLocation}
                        </h2>
                        <p className="text-default-500">
                            {ticket.vendorName}
                        </p>
                    </div>
                    <div>
                        ⭐ 4.8
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                    <div className="bg-default-100 rounded-xl p-3">
                        <p className="text-xs">Date</p>
                        <h4>{ticket.date}</h4>
                    </div>
                    <div className="bg-default-100 rounded-xl p-3">
                        <p className="text-xs">Time</p>
                        <h4>{ticket.time}</h4>
                    </div>
                    <div className="bg-default-100 rounded-xl p-3">
                        <p className="text-xs">Seats</p>
                        <h4>{ticket.quantity || 0}</h4>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-green-600 text-sm">
                        ● {ticket.quantity || 0} seats left
                    </p>

                    <Link
                        href={`/alltickets/${ticket._id}`}
                    >
                        <Button
                            radius="full"
                            color="secondary"
                        >
                            Book Now
                        </Button>
                    </Link>

                </div>

            </div>

        </Card>
    );
};

export default TicketCard;