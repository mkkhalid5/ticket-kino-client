import { dataGet, dataUpdate } from "./server";

export const getAllUser = async () => {
    return await dataGet(`/api/ticket-kino/users`);
}

export const getUserByEmail = async (email) => {
    return await dataGet(`/api/ticket-kino/users/${email}`)
}

export const updateUserDetails = async (id,role, status) => {
    return await dataUpdate(`/api/ticket-kino/users/${id}`,{role, status});
}

export const getUserBookedTicket = async (email) => {
    return await dataGet(`/api/booking/ticket/${email}`);
}