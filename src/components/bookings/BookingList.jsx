"use client";

import { useState } from "react";
import {
    Pagination
} from "@heroui/react";

import BookingCard from "./BookingCard";
import { useCountdown } from "@/lib/action/useCounter";

const BookingList = ({ bookings }) => {
    const { formatTime, getCountdown } = useCountdown();
    const [page, setPage] = useState(1);
    const perPage = 9;
    const totalPages = Math.ceil(
        bookings.length / perPage
    );
    const currentBookings =
        bookings.slice(
            (page - 1) * perPage,
            page * perPage
        );

    return (
        <>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentBookings.map((booking) => {
                    const countdown = getCountdown(
                        booking.date,
                        booking.time
                    );
                    return (
                        <BookingCard
                            key={booking._id}
                            booking={booking}
                            date={formatTime}
                            countdown={countdown}
                        />
                    )
                })}
            </div>
            <div className="flex justify-center mt-10">
                <Pagination
                    total={totalPages}
                    page={page}
                    onChange={setPage}
                    showControls
                    color="primary"
                />
            </div>
        </>
    );
};

export default BookingList;