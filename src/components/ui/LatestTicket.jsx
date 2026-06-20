"use client";

import React, { useEffect, useState } from "react";
import { Plane } from "@gravity-ui/icons";

const LatestTicket = ({ latestTicket }) => {
    const [now, setNow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getCountdown = (date, time) => {
        const departure = new Date(`${date}T${time}`);
        const diff = departure.getTime() - now;

        if (diff <= 0) {
            return "Expired";
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        );
        const seconds = Math.floor(
            (diff % (1000 * 60)) / 1000
        );

        return `${days}D ${hours}H ${minutes}M ${seconds}S`;
    };

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center mb-12">
                <span className="text-[#615FFF] font-semibold uppercase tracking-widest">
                    Live Availability
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                    Latest Tickets
                </h2>

                <p className="text-slate-500 mt-3">
                    Discover the latest approved travel tickets.
                </p>
            </div>

            <div className="space-y-6">
                {latestTicket.map((ticket) => {
                    const countdown = getCountdown(
                        ticket.date,
                        ticket.time
                    );

                    return (
                        <div
                            key={ticket._id}
                            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-5 gap-6 items-center">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#615FFF] p-4 rounded-2xl">
                                        <Plane color="white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase">
                                            {ticket.transportType}
                                        </p>
                                        <h2 className="font-bold text-lg">
                                            {ticket.fromLocation}
                                        </h2>
                                        <p className="text-[#615FFF] font-medium">
                                            → {ticket.toLocation}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">
                                        Ticket
                                    </p>
                                    <h2 className="font-bold text-lg">
                                        {ticket.ticketTitle}
                                    </h2>
                                  <p className="text-slate-600">
                                        {ticket.perks}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">
                                        Departure
                                    </p>
                                    <h2 className="font-bold">
                                        {formatTime(ticket.time)}
                                    </h2>
                                <p className="text-slate-600">
                                        {ticket.date}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">
                                        Departs In
                                    </p>
                                    {countdown === "Expired" ? (
                                        <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full font-semibold">
                                            Expired
                                        </span>
                                    ) : (
                                        <>
                                            <h2 className="font-bold text-orange-500">
                                                {countdown}
                                            </h2>
                                        </>
                                    )}
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="text-slate-500 text-sm">
                                        Price
                                    </p>
                                    <h2 className="font-bold text-3xl text-[#615FFF]">
                                        ৳{ticket.price}
                                    </h2>
                                    <p className="text-green-600 text-sm mb-3">
                                        {ticket.quantity} Seats Left
                                    </p>
                                    <button
                                        disabled={countdown === "Expired"}
                                        className={`px-6 py-2 rounded-xl font-medium transition ${countdown === "Expired"
                                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                : "bg-[#615FFF] hover:bg-[#514ef0] text-white"
                                            }`}
                                    >
                                        {countdown === "Expired"
                                            ? "Expired"
                                            : "Book Now"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestTicket;