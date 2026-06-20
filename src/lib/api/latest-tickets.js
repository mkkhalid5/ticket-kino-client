import { dataGet } from "./server"

export const getLatestTicket = async () => {
    return await dataGet(`/api/ticket-kino/latest-tickets`);
}

export const getAdvertiseTicket = async () => {
    return await dataGet(`/api/ticket-kino/advertise-tickets`);
}

export const getAllTickets = async () => {
    return await dataGet(`/api/ticket-kino/all-tickets`);
}