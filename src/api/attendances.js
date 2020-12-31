import axios from './index';

let token = localStorage.getItem("auth-token")
            if(token==null) {
                localStorage.setItem("auth-token","")
                token=""
            }
export const createCheckInAttendances=(user,shift,note)=>{
    return axios.post("/attendances",{
        user,
        shift,
        note
    }, {headers:{"x-auth-token":token}})
}
export const getListAttendances=()=>{
    return axios.get("/attendances", {headers:{"x-auth-token":token}});
}
export const deleteAttendaces=(id)=>{
    return axios.delete(`/attendances/${id}`, {headers:{"x-auth-token":token}})
}
export const checkOutAttendances=(id)=>{
    return axios.post(`/attendances/checkout/${id}`, {headers:{"x-auth-token":token}})
}