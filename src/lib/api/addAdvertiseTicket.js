import {dataGet, } from "./server";

export const getVendorTicket = async (vendorEmail) => {
    return await dataGet(`/api/allticket?vendorEmail=${vendorEmail}`);
}
