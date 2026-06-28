import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const AdvertiseTicket = ({ advertiseTicket }) => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <p className="uppercase tracking-widest text-violet-600 font-semibold">Featured Destinations</p>
                        <h2 className="text-4xl font-bold mt-2">Sponsored Tickets</h2>
                    </div>
                    <Link
                        href="/alltickets" className="mt-4 md:mt-0 text-violet-600 font-semibold hover:underline"> View All →</Link>
                </div>
                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advertiseTicket.map((ticket) => (
                        <Card
                            key={ticket._id}
                            className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Area */}
                            <div className="relative h-56 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
                                <Image src={ticket.image} alt={ticket?.title || "ticket image"} height={200} width={200} className="h-56 w-full" />
                                <div className="absolute top-4 left-4">
                                    <Chip color="secondary">{ticket.transportType}</Chip>
                                </div>
                                
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold text-blue-500 bg-blue-300 px-3 rounded-2xl">{ticket.fromLocation}</h3>
                                    <p className="text-black bg-red-200 px-3 rounded-2xl">To {ticket.toLocation}</p>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{ticket.fromLocation} → {ticket.toLocation}</h3>
                                <p className="text-slate-500 mb-4">{ticket.perks}</p>
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-slate-500">Available</p>
                                        <p className="font-semibold">{ticket.quantity} Seats</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-slate-500">Starting From</p>
                                        <p className="text-2xl font-bold text-violet-600">৳{ticket.price}</p>
                                    </div>
                                </div>
                                <Link href={`/alltickets/${ticket._id}`}>
                                    <Button
                                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold"
                                    >
                                        Book Now
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AdvertiseTicket;