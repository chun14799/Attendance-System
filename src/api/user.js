import axios from './index';
export const createNewUser = (fullname,job,department,email,phone,salary)=>{
    return axios.post('/users',{
        fullname,
        job,
        department,
        email,
        phone,
        salary
    })
}
export const getListUser=()=>{
    return axios.get("/users");
}
export const deleteUser=(id)=>{
    return axios.delete(`/users/${id}`)
}
export const getDetialUser=(id)=>{
    return axios.get(`/users/${id}`)
}
export const UpdateUserDetial=(id,fullname,department,job,phone,email,salary=0)=>{
    return axios.put(`/users/${id}`,{
        fullname,
        job,
        department,
        email,
        phone,
        salary
    })
}
export const LoginUser=(email,password)=>{
    return axios.post("/login",{
        email:email,
        password:password
    })
}