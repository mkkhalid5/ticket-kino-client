
import { getUserSession } from '@/lib/api/session';
import { getVendorTicket } from '@/lib/api/vendorAllTicket';
import { ArrowRight, PencilToSquare, TrashBin } from '@gravity-ui/icons';
import { Chip, Label, ProgressBar, Table } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MyTicketManagePage = async () => {
    const user = await getUserSession();
    const allTicket = await getVendorTicket(user?.email);
    console.log(allTicket);

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold'>Your All Ticket</h2>

            <div className=''>
                {
                    allTicket.map(ticket => <div key={ticket._id} className='flex gap-4 items-center justify-between mt-4 p-5 border shadow rounded-2xl'>

                        <div className='w-full bg-red-50'>
                            <h2 className='font-bold text-lg flex items-center gap-1'>{ticket.fromLocation}<ArrowRight />{ticket.toLocation}  <span className={`font-medium px-2 rounded-2xl ${ticket.adminApproval === "pending" ? 'bg-yellow-100 text-yellow-500' : ticket.adminApproval === "rejected" ? 'bg-red-100 text-red-500' : 'bg-green-200 text-green-500'} `}>{ticket.adminApproval}</span></h2>
                            <p className='text-[#99A1AF]'>TK{ticket.price} per seat</p>
                            <ProgressBar aria-label="Loading progress" className="w-full" value={45} maxValue={45}>
                                <ProgressBar.Track>
                                    <ProgressBar.Fill />
                                </ProgressBar.Track>
                            </ProgressBar>
                            <p className='text-[#99A1AF]'>{ticket.quantity}/{ticket.quantity} seats sold</p>
                        </div>

                        <div className='flex gap-2'>
                            <div className='rounded-full px-4 py-3 h-full border'>
                                <button disabled={ticket.adminApproval === "rejected"}><PencilToSquare /></button>
                            </div>
                            <div className='rounded-full p-4 h-full border'>
                                <TrashBin />
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default MyTicketManagePage;