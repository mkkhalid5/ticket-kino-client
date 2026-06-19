import AddTicketForm from '@/components/vendor/AddTicketForm';
import { getUserSession } from '@/lib/api/session';
import { getUserByEmail } from '@/lib/api/users';
import React from 'react';

const AddTicketPage = async () => {
    const user = await getUserSession();
    const userDetails = await getUserByEmail(user.email);
    console.log("s",userDetails);
    return (
        <div>
            {
                userDetails[0].status === "fraud" ? "you scammer" : <AddTicketForm />
            }
        </div>
    );
};

export default AddTicketPage;