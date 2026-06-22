import { dataPost, dataUpdate } from "../api/server"

export const postBookingData = async (data) =>{
    return await dataPost('/api/booking/ticket',{data})
}

export const updateBookingData = async (id,status) => {
    return await dataUpdate(`/api/booking/ticket/${id}`,{status})
}