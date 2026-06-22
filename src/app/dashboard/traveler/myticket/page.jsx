import BookingList from "@/components/bookings/BookingList";
import { getUserSession } from "@/lib/api/session";
import { getUserBookedTicket } from "@/lib/api/users";


const MyBookingsPage = async () => {
    const user = await getUserSession();
    const bookings = await getUserBookedTicket(user.email);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    My Bookings
                </h1>
                <p className="text-default-500">
                    {bookings.length} total trips
                </p>
            </div>
            <BookingList bookings={bookings} />
        </div>
    );
};
export default MyBookingsPage;