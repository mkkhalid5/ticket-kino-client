import { dataGet, getPublicData } from "./server"

export const getLatestTicket = async () => {
    return await getPublicData(`/api/ticket-kino/latest-tickets`);
}

export const getAdvertiseTicket = async () => {
    return await getPublicData(`/api/ticket-kino/advertise-tickets`);
}

export const getAllTickets = async () => {
    return await getPublicData(`/api/ticket-kino/all-tickets`);
}

export const getTicketById = async (id) => {
    return await dataGet(`/api/ticket-kino/all-tickets/${id}`);
}