import VendorAnalytics from '@/components/vendor/VendorAnalytics';
import { getUserSession } from '@/lib/api/session';
import { getAllPaidTicket, getVendorTicket } from '@/lib/api/vendorAllTicket';
import React from 'react';

const VendorTicketAnalytics = async () => {
    const user = await getUserSession();
    const allTickets = await getVendorTicket(user?.email);
    const soldTickets= await getAllPaidTicket(user?.email);
    console.log('s',soldTickets);
    
    return (
        <div>
            <VendorAnalytics allTickets={allTickets} soldTickets={soldTickets} />
        </div>
    );
};

export default VendorTicketAnalytics;