"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import TicketCard from "./TicketCard";


const TicketList = ({ tickets }) => {
    const [ticketss, setTickets] = useState(tickets);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [transport, setTransport] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 6;
    const totalPages = Math.ceil(
        ticketss.length / perPage
    );

    const startIndex =
        (page - 1) * perPage;

    const currentTickets =
        ticketss.slice(
            startIndex,
            startIndex + perPage
        );

    const handleSearch = async () => {
        const params = new URLSearchParams();
        if (from) params.append("from", from);
        if (to) params.append("to", to);
        if (transport) params.append("transportType", transport);
        if (sort) params.append("sort", sort);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/ticket-kino/all-tickets?${params.toString()}`
        );
        const data = await res.json();
        setTickets(data);
        setPage(1);
    };

    const handleReset = () => {
        setFrom("");
        setTo("");
        setTransport("");
        setSort("");
        setTickets(tickets);
        setPage(1);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-start">
            {/* Sidebar */}
            <aside className="">
                <div className="sticky top-24 bg-white rounded-2xl shadow-md border p-5 space-y-4">
                    <h2 className="text-xl font-bold">
                        Search & Filter
                    </h2>
                    <input
                        type="text"
                        placeholder="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="To"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <select
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    >
                        <option value="">All Transport</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="launch">Launch</option>
                        <option value="airplane">Airplane</option>
                    </select>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    >
                        <option value="">Sort By Price</option>
                        <option value="low">
                            Low → High
                        </option>
                        <option value="high">
                            High → Low
                        </option>
                    </select>
                    <Button
                        color="primary"
                        className="w-full"
                        onPress={handleSearch}
                    >
                        Search
                    </Button>
                    <Button
                        variant="bordered"
                        className="w-full"
                        onPress={handleReset}
                    >
                        Reset
                    </Button>
                </div>
            </aside>
            {/* Ticket List */}
            <main className="lg:col-span-3">

                <div className="space-y-6">
                    {currentTickets.map((ticket) => (
                        <TicketCard
                            key={ticket._id}
                            ticket={ticket}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-10">
                    <Button
                        isDisabled={page === 1}
                        onPress={() => setPage(page - 1)}
                    >
                        Previous
                    </Button>
                    {[...Array(totalPages)].map((_, index) => (
                        <Button
                            key={index}
                            color={
                                page === index + 1
                                    ? "secondary"
                                    : "default"
                            }
                            onPress={() =>
                                setPage(index + 1)
                            }
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        isDisabled={page === totalPages}
                        onPress={() => setPage(page + 1)}
                    >
                        Next
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default TicketList;