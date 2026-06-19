import { dataGet, dataUpdate } from "./server"

export const getAllUser = async () => {
    return await dataGet(`/api/ticket-kino/users`);
}

export const updateUserDetails = async (id,role, status) => {
    return await dataUpdate(`/api/ticket-kino/users/${id}`,{role, status});
}