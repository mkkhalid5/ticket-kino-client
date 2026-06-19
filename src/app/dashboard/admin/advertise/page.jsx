import { Advertise } from '@/components/dashboard/admin/AdvertiseControl';
import { getAllTicket } from '@/lib/api/vendorAllTicket';
import { Shield } from '@gravity-ui/icons';
import { Chip, Table } from '@heroui/react';
import React from 'react';

const AdminAdvertisePage = async () => {
    const allTicket = await getAllTicket();
    console.log("hi", allTicket);
    return (
        <div className='p-5'>
            <div className='py-10'>
                <span className='px-2 rounded-2xl bg-red-100 text-red-500 flex justify-center items-center w-max gap-1'><Shield />Admin Access</span>
                <h2 className='text-2xl font-bold'>Admin Control Center</h2>
            </div>
            <div className="hidden md:block">
                <Table className="rounded-2xl overflow-hidden border shadow-sm bg-white">
                    <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                        <h2 className="text-lg font-bold text-gray-800">
                            All Tickets — Advertise Queue
                        </h2>
                        <span className="text-xs text-gray-500">
                            Total: {allTicket.length}
                        </span>
                    </div>
                    <Table.ResizableContainer>
                        <Table.Content
                            aria-label="Advertise table"
                            className="min-w-250"
                        >
                            <Table.Header className="bg-gray-100 text-gray-700">
                                <Table.Column minWidth={180}>Vendor</Table.Column>
                                <Table.Column minWidth={220}>Route</Table.Column>
                                <Table.Column minWidth={120}>Type</Table.Column>
                                <Table.Column minWidth={120}>Price</Table.Column>
                                <Table.Column minWidth={120}>Status</Table.Column>
                                <Table.Column minWidth={150}>Advertise Status</Table.Column>
                                <Table.Column minWidth={120}>Action</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {allTicket.map((ticket) => (
                                    <Table.Row
                                        key={ticket._id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <Table.Cell className="font-medium">
                                            {ticket.vendorName}
                                        </Table.Cell>
                                        <Table.Cell className="text-gray-600">
                                            {ticket.fromLocation} →{" "}
                                            {ticket.toLocation}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {ticket.transportType}
                                        </Table.Cell>
                                        <Table.Cell className="font-semibold">
                                            ৳{ticket.price}/seat
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Chip
                                                size="sm"
                                                variant="soft"
                                                color={
                                                    ticket.adminApproval ===
                                                        "approved"
                                                        ? "success"
                                                        : ticket.adminApproval ===
                                                            "rejected"
                                                            ? "danger"
                                                            : "warning"
                                                }
                                            >
                                                {ticket.adminApproval}
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Chip
                                                size="sm"
                                                variant="soft"
                                                color={
                                                    ticket.advertise === "true"
                                                        ? "success"
                                                        : "danger"
                                                }
                                            >
                                                {ticket.advertise === "true"
                                                    ? "Active"
                                                    : "Inactive"}
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Advertise ticket={ticket} />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ResizableContainer>
                </Table>
            </div>

            {/* ================= MOBILE CARD ================= */}
            <div className="md:hidden space-y-4 p-3">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm">
                    <h2 className="text-lg font-bold">
                        Advertise Queue
                    </h2>
                    <span className="text-xs text-gray-500">
                        {allTicket.length} tickets
                    </span>
                </div>

                {/* Cards */}
                {allTicket.map((ticket) => (
                    <div
                        key={ticket._id}
                        className="bg-white border rounded-2xl p-4 shadow-sm space-y-3 hover:shadow-md transition"
                    >
                        {/* Top */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    {ticket.vendorName}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {ticket.transportType}
                                </p>
                            </div>

                            <Chip
                                size="sm"
                                variant="soft"
                                color={
                                    ticket.adminApproval === "approved"
                                        ? "success"
                                        : ticket.adminApproval === "rejected"
                                            ? "danger"
                                            : "warning"
                                }
                            >
                                {ticket.adminApproval}
                            </Chip>
                        </div>

                        {/* Route */}
                        <div>
                            <p className="text-xs text-gray-400">Route</p>
                            <p className="font-medium">
                                {ticket.fromLocation} → {ticket.toLocation}
                            </p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs text-gray-400">Price</p>
                                <p className="font-semibold">
                                    ৳{ticket.price}/seat
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400">
                                    Advertise
                                </p>

                                <Chip
                                    size="sm"
                                    variant="soft"
                                    color={
                                        ticket.advertise === "true"
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {ticket.advertise === "true"
                                        ? "Active"
                                        : "Inactive"}
                                </Chip>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="pt-2 border-t flex gap-2">
                            <Advertise ticket={ticket} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminAdvertisePage;