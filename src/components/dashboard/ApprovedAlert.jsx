'use client'
import { updateTicketStatus } from '@/lib/api/vendorAllTicket';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const ApprovedAlert = ({ticket}) => {
    const ad = ticket.advertise;
    const handleUpdate = () => {
            updateTicketStatus(ticket._id, "approved",ad);
            alert("approved Successfull");
            window.location.reload();
        }
    return (
        <AlertDialog>
            <Button className="bg-accent-soft text-accent-soft-foreground" isDisabled={ticket.adminApproval !== "pending"}>Approved</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Approved this ticket ?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This Ticket will added and Traveler can buy this <strong>{ticket.ticketTitle}</strong> Ticket
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" >
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={handleUpdate
                            }>
                                Approved Ticket
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default ApprovedAlert;