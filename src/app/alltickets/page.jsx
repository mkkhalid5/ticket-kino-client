
import TicketList from "@/components/tickets/TicketList";
import { getAllTickets } from "@/lib/api/latest-tickets";



const AllTicketsPage = async () => {
    const alltickets = await getAllTickets();
    console.log("tt",alltickets);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    All Tickets
                </h1>
                <p className="text-default-500">
                    {alltickets.length} results found
                </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-8">
                <div>
                    
                </div>
                <div className="lg:col-span-3">
                    <TicketList tickets={alltickets} />
                </div>
            </div>
        </div>
    );
};

export default AllTicketsPage;