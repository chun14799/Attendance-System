import axios from './index';
export const CreateCheckInAttendances=(user,shift,note)=>{
    return axios.post("/attendances",{
        user,
        shift,
        note
    })
}
export const GetListAttendances=(id)=>{
    if(id){
        return axios.get(`/attendances?id=${id}`);
    }
    return axios.get("/attendances");
}
export const deleteAttendaces=(id)=>{
    return axios.delete(`/attendances/${id}`)
}
export const checkOutAttendances=(id)=>{
    return axios.post(`/attendances/checkOut/${id}`)
}