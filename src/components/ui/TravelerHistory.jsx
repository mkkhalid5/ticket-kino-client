import React from "react";

const TravelerHistory = ({ bookings }) => {
    const paidBookings = bookings.filter(
        booking => booking.paymentStatus === "paid"
    );
    return (
        <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-2xl font-bold mb-6">Payment History</h2>

            {paidBookings.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    No payment history found.
                </div>
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border border-gray-200">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">#</th>
                                    <th className="px-4 py-3 text-left">Transaction ID</th>
                                    <th className="px-4 py-3 text-left">Ticket</th>
                                    <th className="px-4 py-3 text-left">Amount</th>
                                    <th className="px-4 py-3 text-left">Payment Date</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {paidBookings.map((booking, index) => (
                                    <tr
                                        key={booking._id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-3">{index + 1}</td>

                                        <td className="px-4 py-3 font-mono text-sm">
                                            {booking.stripeTrx}
                                        </td>

                                        <td className="px-4 py-3">
                                            {booking.ticketTitle}
                                        </td>

                                        <td className="px-4 py-3 font-semibold text-green-600">
                                            ৳{booking.totalCost}
                                        </td>

                                        <td className="px-4 py-3">
                                            {booking.paidAt
                                                ? new Date(booking.paidAt).toLocaleString()
                                                : "-"}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card */}
                    <div className="md:hidden space-y-4">
                        {paidBookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="border rounded-xl p-4 shadow-sm"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-bold text-lg">
                                        {booking.ticketTitle}
                                    </h3>

                                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                        Paid
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div>
                                        <p className="text-gray-500">
                                            Transaction ID
                                        </p>

                                        <p className="font-mono break-all">
                                            {booking.stripeTrx}
                                        </p>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Amount
                                        </span>

                                        <span className="font-semibold text-green-600">
                                            ৳{booking.totalCost}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Payment Date
                                        </span>

                                        <span>
                                            {booking.paidAt
                                                ? new Date(booking.paidAt).toLocaleDateString()
                                                : "-"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TravelerHistory;