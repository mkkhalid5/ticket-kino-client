'use client'
import { updateTicketStatus } from '@/lib/api/vendorAllTicket';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const DeleteAlert = ({ ticket }) => {
    const handleUpdate = () => {
        updateTicketStatus(ticket._id, "rejected");
        toast.error("Rejected Successfull");
        window.location.reload();
    }
    return (
        <AlertDialog>
            <Button className="bg-danger-soft text-danger-soft-foreground" isDisabled={ticket.adminApproval !== "pending"}>Rejected</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Reject this Ticket?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will Rejected Ticket <strong>{ticket.ticketTitle}</strong> and all of its
                                data.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={handleUpdate}>
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteAlert;