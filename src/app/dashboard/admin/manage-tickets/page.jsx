import ApprovedAlert from '@/components/dashboard/ApprovedAlert';
import DeleteAlert from '@/components/dashboard/DeleteAlert';
import { getAllTicket } from '@/lib/api/vendorAllTicket';
import { Shield } from '@gravity-ui/icons';
import { Chip, Table } from '@heroui/react';
import React from 'react';

const ManageTicketsPageAdmin = async () => {
    const allTicket = await getAllTicket();
    console.log("hi", allTicket);
    return (
        <div className='p-3'>
            <div className='py-10'>
                <span className='px-2 rounded-2xl bg-red-100 text-red-500 flex justify-center items-center w-max gap-1'><Shield />Admin Access</span>
                <h2 className='text-2xl font-bold'>Admin Control Center</h2>
            </div>
            <div className="hidden md:block">
                <div className="rounded-2xl border shadow-sm bg-white overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">
                                All Tickets — Moderation Queue
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Manage all ticket approvals and actions
                            </p>
                        </div>

                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                            Total: {allTicket.length}
                        </span>
                    </div>
                    <Table.ResizableContainer>
                        <Table.Content
                            aria-label="Moderation Queue Table"
                            className="min-w-250"
                        >
                            <Table.Header className="bg-gray-100 text-gray-700">
                                <Table.Column minWidth={220}>
                                    Vendor
                                </Table.Column>
                                <Table.Column minWidth={220}>
                                    Route
                                </Table.Column>
                                <Table.Column minWidth={50}>
                                    Type
                                </Table.Column>
                                <Table.Column minWidth={100}>
                                    Price
                                </Table.Column>
                                <Table.Column minWidth={100}>
                                    Status
                                </Table.Column>
                                <Table.Column minWidth={220}>
                                    Actions
                                </Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {allTicket.map((ticket) => (
                                    <Table.Row
                                        key={ticket._id}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <Table.Cell className="px-4 py-3">
                                            <div className="pl-2 font-medium text-gray-800">
                                                {ticket.vendorName}
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="px-4 py-3 text-gray-700">
                                            {ticket.fromLocation}
                                            <span className="mx-2 text-gray-400">→</span>
                                            {ticket.toLocation}
                                        </Table.Cell>
                                        <Table.Cell className="px-4 py-3 text-gray-600">
                                            {ticket.transportType}
                                        </Table.Cell>
                                        <Table.Cell className="px-4 py-3 font-semibold text-gray-800">
                                            ৳{ticket.price}
                                            <span className="text-xs text-gray-400 ml-1">
                                                /seat
                                            </span>
                                        </Table.Cell>
                                        <Table.Cell className="px-4 py-3">
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
                                        </Table.Cell>
                                        <Table.Cell className="px-4 py-3">
                                            <div className="flex gap-2">
                                                <ApprovedAlert ticket={ticket} />
                                                <DeleteAlert ticket={ticket} />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ResizableContainer>
                </div>
            </div>
            <div className="md:hidden space-y-4 p-3">
                <div className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm">
                    <h2 className="text-lg font-bold">Moderation Queue</h2>
                    <span className="text-xs text-gray-500">{allTicket.length}</span>
                </div>
                {allTicket.map((ticket) => (
                    <div
                        key={ticket._id}
                        className="bg-white border rounded-2xl p-4 shadow-sm space-y-3 hover:shadow-md transition"
                    >
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
                        <div>
                            <p className="text-xs text-gray-400">Route</p>
                            <p className="font-medium">
                                {ticket.fromLocation} → {ticket.toLocation}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs text-gray-400">Type</p>
                                <p className="font-medium">
                                    {ticket.transportType}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Price</p>
                                <p className="font-semibold text-green-600">
                                    ৳{ticket.price}
                                </p>
                                <p className="text-xs text-gray-400">
                                    per seat
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-3 border-t">
                            <ApprovedAlert ticket={ticket} />
                            <DeleteAlert ticket={ticket} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageTicketsPageAdmin;