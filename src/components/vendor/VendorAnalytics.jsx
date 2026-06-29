"use client";

import {
    Ticket,
    SquareChartBar,
    TagDollar,
} from "@gravity-ui/icons";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

const VendorAnalytics = ({allTickets,soldTickets}) => {
    const totalTickets = allTickets.reduce(
        (sum, item) => sum + item.totalQuantity,
        0
    )

    const totalSoldTickets = soldTickets.reduce(
        (sum, item) => sum + item.totalBuy,
        0
    );

    const totalRevenue = soldTickets.reduce(
        (sum, item) => sum + item.totalCost,
        0
    );

    const remainingTickets = Math.max(
        totalTickets - totalSoldTickets,
        0
    );

    // Bar Chart
    const barData = [
        {
            name: "Overview",
            Tickets: totalTickets,
            Sold: totalSoldTickets,
        },
    ];

    // Pie Chart
    const pieData = [
        {
            name: "Sold",
            value: totalSoldTickets,
        },
        {
            name: "Remaining",
            value: remainingTickets,
        },
    ];

    const COLORS = ["#2563eb", "#d1d5db"];
    return (
        <div className="space-y-8">

            {/* Heading */}

            <div>
                <h1 className="text-3xl font-bold">
                    Dashboard Analytics
                </h1>

                <p className="text-gray-500 mt-2">
                    Monitor your ticket sales and revenue.
                </p>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* Total Tickets */}

                <div className="rounded-3xl bg-white shadow border p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                Total Tickets
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                {totalTickets}
                            </h2>

                        </div>

                        <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Ticket className="w-8 h-8 text-blue-600" />
                        </div>

                    </div>

                </div>

                {/* Sold */}

                <div className="rounded-3xl bg-white shadow border p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                Tickets Sold
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                {totalSoldTickets}
                            </h2>

                        </div>

                        <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
                            <SquareChartBar className="w-8 h-8 text-green-600" />
                        </div>

                    </div>

                </div>

                {/* Revenue */}

                <div className="rounded-3xl bg-white shadow border p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                Total Revenue
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ৳ {totalRevenue.toLocaleString()}
                            </h2>

                        </div>

                        <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                            <TagDollar className="w-8 h-8 text-yellow-600" />
                        </div>

                    </div>

                </div>

            </div>

            {/* Charts */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Bar Chart */}

                <div className="xl:col-span-2 bg-white rounded-3xl shadow border p-6">

                    <h2 className="text-xl font-semibold mb-6">
                        Ticket Overview
                    </h2>

                    <div className="h-96">

                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart data={barData}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Legend />

                                <Bar
                                    dataKey="Tickets"
                                    fill="#2563eb"
                                    radius={[8, 8, 0, 0]}
                                />

                                <Bar
                                    dataKey="Sold"
                                    fill="#22c55e"
                                    radius={[8, 8, 0, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </div>

                {/* Pie Chart */}

                <div className="bg-white rounded-3xl shadow border p-6">

                    <h2 className="text-xl font-semibold mb-6">
                        Ticket Status
                    </h2>

                    <div className="h-80">

                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    innerRadius={60}
                                    outerRadius={95}
                                    paddingAngle={4}
                                >
                                    {pieData.map((item, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />

                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                    <div className="mt-6 space-y-3">

                        <div className="flex justify-between text-sm">

                            <span className="text-gray-500">
                                Sold Tickets
                            </span>

                            <span className="font-semibold">
                                {totalSoldTickets}
                            </span>

                        </div>

                        <div className="flex justify-between text-sm">

                            <span className="text-gray-500">
                                Remaining Tickets
                            </span>

                            <span className="font-semibold">
                                {remainingTickets}
                            </span>

                        </div>

                        <div className="flex justify-between text-sm">

                            <span className="text-gray-500">
                                Revenue
                            </span>

                            <span className="font-semibold text-green-600">
                                ৳ {totalRevenue.toLocaleString()}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default VendorAnalytics;