'use client'

import { postBookingData } from '@/lib/action/booking-control';
import { AlertDialog, Button, Description, InputGroup, Label, NumberField, TextField } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookNowHandle = ({ ticket, userDetails }) => {
    const [quantity, setQuantity] = useState(1);
    const user = userDetails[0];
    const { _id, quantity: ticketQuantity, price, ...ticketData } = ticket;
    const newTicket = {
        ...ticketData,
        ticketId: _id,
        ticketStatus: "pending",
        totalBuy: Number(quantity),
        totalCost: Number(price) * Number(quantity),
        userName: user.name,
        userEmail: user.email
    }
    console.log('nd', newTicket);
    const handleBookingTickets = async () => {
        if (quantity > Number(ticketQuantity)) {
            toast.error(`You can buy maximum ${ticketQuantity} tickets.`);
            return;
        }
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
            toast("Ticket Booked Successfull wait for vendor approval..");
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

                            <TextField className="w-full max-w-[280px]" defaultValue={quantity} onChange={setQuantity} name="price">
                                <Label>Set your seat</Label>
                                <InputGroup>
                                    <InputGroup.Prefix></InputGroup.Prefix>
                                    <InputGroup.Input className="w-full max-w-[200px]" type="number" />
                                    <InputGroup.Suffix>Seat</InputGroup.Suffix>
                                </InputGroup>
                                <Description>Your total seats?</Description>
                            </TextField>

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