import { dataGet, dataUpdate } from "./server";

export const getVendorTicket = async (vendorEmail) => {
    return await dataGet(`/api/allticket?vendorEmail=${vendorEmail}`);
}

export const getAllTicket = async () =>{
    return await dataGet(`/api/allticket`);
}

export const updateTicketStatus = async (id,status,ad) => {
    return await dataUpdate(`/api/allticket/${id}`,{status,ad});
}