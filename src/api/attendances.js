import axios from './index';
<<<<<<< HEAD
export const CreateCheckInAttendances=(user,shift,note)=>{
=======
export const createCheckInAttendances=(user,shift,note)=>{
>>>>>>> parent of b408845... add token to api
    return axios.post("/attendances",{
        user,
        shift,
        note
    })
}
<<<<<<< HEAD
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
=======
export const getListAttendances=()=>{
    return axios.get("/attendances");
>>>>>>> parent of b408845... add token to api
}
export const deleteAttendaces=(id)=>{
    return axios.delete(`/attendances/${id}`)
}
export const checkOutAttendances=(id)=>{
<<<<<<< HEAD
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
=======
    return axios.post(`/attendances/checkout/${id}`)
>>>>>>> parent of b408845... add token to api
}