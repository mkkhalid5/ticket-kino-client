import { dataPost } from "../api/server"

export const postBookingData = async (data) =>{
    return await dataPost('/api/booking/ticket',{data})
}