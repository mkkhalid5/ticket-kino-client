import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";

const cityImages = {
    Dhaka:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",

    Dubai:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090",

    Rajshahi:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

    Pakistan:
        "https://images.unsplash.com/photo-1578898887932-dce23a595ad4",

    "South Korea":
        "https://images.unsplash.com/photo-1538485399081-7c897c1ab94e"
};

const TicketCard = ({ ticket }) => {

    const image =
        cityImages[ticket.toLocation] ||
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05";

    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all">
            <div className="relative h-48">
                <img
                    src={image}
                    alt={ticket.toLocation}
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