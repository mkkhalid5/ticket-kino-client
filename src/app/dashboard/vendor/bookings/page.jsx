import ApprovedAlert from "@/components/dashboard/vendor/ApprovedAlert";
import RejectAlert from "@/components/dashboard/vendor/RejectAlert";
import { getAllUserBookedTicket } from "@/lib/api/vendorAllTicket";
import {
    Card,
    Chip,
    Button,
    Table,
} from "@heroui/react";

const BookingRequestPage = async () => {
    const allTicket = await getAllUserBookedTicket();

    const pendingCount = allTicket.filter(
        (item) => item.ticketStatus === "pending"
    ).length;

    const approvedCount = allTicket.filter(
        (item) => item.ticketStatus === "approved"
    ).length;

    const rejectedCount = allTicket.filter(
        (item) => item.ticketStatus === "rejected"
    ).length;

    console.log("ad",allTicket);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Booking Requests
                </h1>

                <p className="text-default-500 mt-2">
                    Manage all booking requests from travelers
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                <Card className="p-5">
                    <p className="text-default-500">
                        Total Requests
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {allTicket.length}
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-default-500">
                        Pending
                    </p>

                    <h2 className="text-3xl font-bold text-warning mt-2">
                        {pendingCount}
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-default-500">
                        Approved
                    </p>

                    <h2 className="text-3xl font-bold text-success mt-2">
                        {approvedCount}
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-default-500">
                        Rejected
                    </p>

                    <h2 className="text-3xl font-bold text-danger mt-2">
                        {rejectedCount}
                    </h2>
                </Card>

            </div>

            {/* Table */}
            <Card className="shadow-lg">
                <div className="hidden lg:block overflow-x-auto">
                    <Table
                        aria-label="Booking Request Table"
                        removeWrapper
                    >
                        <Table.Content aria-label="Example table">
                            <Table.Header>
                                <Table.Column>TRAVELER</Table.Column>
                                <Table.Column>EMAIL</Table.Column>
                                <Table.Column>TICKET</Table.Column>
                                <Table.Column>UANTITY</Table.Column>
                                <Table.Column>AL COST</Table.Column>
                                <Table.Column>STATUS</Table.Column>
                                <Table.Column>ACTIONS</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {allTicket.map((ticket) => (
                                    <Table.Row key={ticket._id}>
                                        <Table.Cell>
                                            <div>
                                                <p className="font-semibold">{ticket.userName}</p>
                                                <p className="text-xs text-default-500">Traveler</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{ticket.userEmail}</Table.Cell>
                                        <Table.Cell>
                                            <div>
                                                <p className="font-medium">{ticket.ticketTitle}</p>
                                                <p className="text-xs text-default-500">{ticket.fromLocation}{" → "}{ticket.toLocation}</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{ticket.totalBuy}</Table.Cell>
                                        <Table.Cell>
                                            <span className="font-semibold"> ৳{ticket.totalCost} </span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Chip
                                                variant="flat"
                                                color={
                                                    ticket.ticketStatus === "approved"
                                                        ? "success"
                                                        : ticket.ticketStatus === "rejected"
                                                            ? "danger"
                                                            : "warning"
                                                }
                                            >
                                                {ticket.ticketStatus}
                                            </Chip>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex gap-2">
                                                <ApprovedAlert ticket={ticket} />
                                                <RejectAlert ticket={ticket} />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table>
                </div>
                {/* Mobile */}
                <div className="grid gap-4 lg:hidden">
                    {allTicket.map((ticket) => (
                        <Card
                            key={ticket._id}
                            className="p-4 shadow-md"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg">
                                        {ticket.userName}
                                    </h3>
                                    <p className="text-sm text-default-500">
                                        {ticket.userEmail}
                                    </p>
                                </div>
                                <Chip
                                    variant="flat"
                                    color={
                                        ticket.ticketStatus === "approved"
                                            ? "success"
                                            : ticket.ticketStatus === "rejected"
                                                ? "danger"
                                                : "warning"
                                    }
                                >
                                    {ticket.ticketStatus}
                                </Chip>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p>
                                    <span className="font-semibold">
                                        Ticket:
                                    </span>
                                    {" "}
                                    {ticket.ticketTitle}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Route:
                                    </span>
                                    {" "}
                                    {ticket.fromLocation}
                                    {" → "}
                                    {ticket.toLocation}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Quantity:
                                    </span>
                                    {" "}
                                    {ticket.totalBuy}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Total Cost:
                                    </span>
                                    {" "}
                                    ৳{ticket.totalCost}
                                </p>
                            </div>
                            <div className="flex gap-2 mt-5">
                                <ApprovedAlert ticket={ticket} />
                                <Button
                                    size="sm"
                                    color="danger"
                                    className="flex-1"
                                >
                                    Reject
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default BookingRequestPage;