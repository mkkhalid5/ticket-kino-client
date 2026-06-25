import TravelerHistory from '@/components/ui/TravelerHistory';
import { getUserSession } from '@/lib/api/session';
import { getUserBookedTicket } from '@/lib/api/users';
import React from 'react';

const TrxHistory = async () => {
    const user = await getUserSession();
    const bookings = await getUserBookedTicket(user.email);

    return (
        <div>
            <TravelerHistory bookings={bookings}/>
            
        </div>
    );
};

export default TrxHistory;