"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import TicketCard from "./TicketCard";


const TicketList = ({ tickets }) => {

    const [page, setPage] = useState(1);

    const perPage = 6;

    const totalPages = Math.ceil(
        tickets.length / perPage
    );

    const startIndex =
        (page - 1) * perPage;

    const currentTickets =
        tickets.slice(
            startIndex,
            startIndex + perPage
        );

    return (
        <>
            <div className="space-y-6">

                {currentTickets.map(ticket => (
                    <TicketCard
                        key={ticket._id}
                        ticket={ticket}
                    />
                ))}

            </div>

            <div className="flex justify-center gap-2 mt-10">

                <Button
                    isDisabled={page === 1}
                    onPress={() =>
                        setPage(page - 1)
                    }
                >
                    Previous
                </Button>

                {[...Array(totalPages)].map(
                    (_, index) => (

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

                    )
                )}

                <Button
                    isDisabled={
                        page === totalPages
                    }
                    onPress={() =>
                        setPage(page + 1)
                    }
                >
                    Next
                </Button>

            </div>
        </>
    );
};

export default TicketList;