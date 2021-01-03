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
export const GetListAttendancesSalary=(id)=>{
    if(id){
        return axios.get(`/salary?id=${id}`);
    }
    return axios.get("/salary");
}
export const deleteAttendaces=(id)=>{
    return axios.delete(`/attendances/${id}`)
}
export const checkOutAttendances=(id)=>{
    return axios.post(`/attendances/checkOut/${id}`)
}
export const getDetialAttendances=(id)=>{
    return axios.get(`/attendances/${id}`)
}
export  const UpdateAttendances =(id,shift,checkIn,checkOut)=>{
    return axios.put(`/attendances/${id}`,{
        shift:shift,
        checkIn:checkIn,
        checkOut:checkOut
    })
}