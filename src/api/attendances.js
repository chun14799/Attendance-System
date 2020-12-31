import axios from './index';
export const createCheckInAttendances=(user,shift,note)=>{
    return axios.post("/attendances",{
        user,
        shift,
        note
    })
}
export const getListAttendances=()=>{
    return axios.get("/attendances");
}
export const deleteAttendaces=(id)=>{
    return axios.delete(`/attendances/${id}`)
}
export const checkOutAttendances=(id)=>{
    return axios.post(`/attendances/checkout/${id}`)
}