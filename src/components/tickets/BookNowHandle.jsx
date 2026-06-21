'use client'

import { postBookingData } from '@/lib/action/booking-control';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const BookNowHandle = ({ ticket, userDetails }) => {
    const user = userDetails[0];
    const { _id,...ticketData } = ticket;
    const newTicket = {
        ...ticketData,
        ticketId: _id,
        ticketStatus: "pending",
        userName: user.name,
        userEmail: user.email
    }
    console.log('nd', newTicket);
    const handleBookingTickets = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URI}/api/booking/ticket`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newTicket),
                }
            );
            alert("Ticket Booked Successfull wait for vendor approval..");
            return await response.json();

        }
        catch (e) {
            console.log("error", e);
        }

    }

    return (
        <AlertDialog>
            <Button className="w-full mt-6 font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600">Book Now</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="success" />
                            <AlertDialog.Heading>Confirm to buy this Ticket?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            This will pending for vendor apporval. Then you can pay for this ticket.
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel Booking
                            </Button>
                            <Button onClick={handleBookingTickets} slot="close" variant="primary">
                                Book Ticket
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookNowHandle;