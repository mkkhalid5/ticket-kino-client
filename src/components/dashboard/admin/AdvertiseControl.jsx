'use client'
import { updateTicketStatus } from "@/lib/api/vendorAllTicket";
import { AlertDialog, Button, Switch } from "@heroui/react";
export function Advertise({ ticket }) {
    const adminApproval = ticket.adminApproval;
    const handleUpdateT = () => {
        updateTicketStatus(ticket._id, adminApproval, "true");
        alert("Advertise Successfull");
        window.location.reload();
    }

    const handleUpdateF = () => {
        updateTicketStatus(ticket._id, adminApproval, "false");
        alert("Unadvertise Successfull");
        window.location.reload();
    }
    return (
        <>
            { ticket.advertise === "false" ? <AlertDialog>
                <Button className="bg-accent-soft text-accent-soft-foreground">Advertise</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Advertise this ticket ?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This Ticket will Advertise . <strong>{ticket.ticketTitle}</strong> show on advertise Ticket
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary" >
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger" onClick={handleUpdateT
                                }>
                                    Advertise Ticket
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog> : 
            <AlertDialog>
            <Button className="bg-danger-soft text-danger-soft-foreground">Unadvertise</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Unadvertise this ticket ?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This Ticket will Unadvertise . <strong>{ticket.ticketTitle}</strong> not show on advertise Ticket
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" >
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={handleUpdateF
                            }>
                                Unadvertise Ticket
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>}
        </>
    );
}