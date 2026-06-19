import { Advertise } from '@/components/dashboard/admin/AdvertiseControl';
import ApprovedAlert from '@/components/dashboard/ApprovedAlert';
import DeleteAlert from '@/components/dashboard/DeleteAlert';
import { getAllTicket } from '@/lib/api/vendorAllTicket';
import { Chip, Table } from '@heroui/react';
import React from 'react';

const AdminAdvertisePage = async () => {
    const allTicket = await getAllTicket();
    console.log("hi",allTicket);
    return (
        <div className='p-5'>
            <div className='py-10'>
                <span className='px-2 rounded-2xl bg-red-100 text-red-500'>Admin Access</span>
                <h2 className='text-2xl font-bold'>Admin Control Center</h2>
            </div>
            <Table>
                <h2 className='text-lg font-bold p-5'>All Tickets — Advertise Queue</h2>
                <Table.ResizableContainer>
                    <Table.Content aria-label="Table with resizable columns" className="min-w-175">
                        <Table.Header>
                            <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={150}>
                                Vendor Name
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="route" minWidth={150}>
                                Route
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="type" minWidth={100}>
                                Type
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="price" minWidth={100}>
                                Price
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                Status
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="adstatus" minWidth={100}>
                                Advertise Status
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="advertise" minWidth={100}>
                                Advertise
                            </Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                allTicket.map(ticket => <Table.Row key={ticket._id}>
                                    {console.log("nai",ticket)}
                                    <Table.Cell>{ticket.vendorName}</Table.Cell>
                                    <Table.Cell>{ticket.fromLocation} to {ticket.toLocation}</Table.Cell>
                                    <Table.Cell> {ticket.transportType} </Table.Cell>
                                    <Table.Cell>{ticket.price}/per seat</Table.Cell>
                                    <Table.Cell>
                                        <Chip color={`${ticket.adminApproval === "approved"? "success" : ticket.adminApproval === "rejected" ? "danger" : "warning"}`} size="sm" variant="soft">
                                            {ticket.adminApproval}
                                        </Chip>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Chip color={`${ticket.advertise === "true"? "success" : "danger"}`} size="sm" variant="soft">
                                            {ticket.advertise}
                                        </Chip>
                                    </Table.Cell>
                                    <Table.Cell> <Advertise ticket={ticket} /> </Table.Cell>
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table.Content>
                </Table.ResizableContainer>
            </Table>
        </div>
    );
};

export default AdminAdvertisePage;