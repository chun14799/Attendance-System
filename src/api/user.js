import axios from './index';
<<<<<<< HEAD
export const createNewUser = (fullname,job,department,email,phone,salary)=>{
=======
export const createNewUser = (fullname,job,department,email,phone)=>{
>>>>>>> parent of b408845... add token to api
    return axios.post('/users',{
        fullname,
        job,
        department,
        email,
<<<<<<< HEAD
        phone,
        salary
=======
        phone
>>>>>>> parent of b408845... add token to api
    })
}
export const getListUser=()=>{
    return axios.get("/users");
}
export const deleteUser=(id)=>{
    return axios.delete(`/users/${id}`)
}
<<<<<<< HEAD
export const getDetialUser=(id)=>{
=======
export const getDetailUser=(id)=>{
>>>>>>> parent of b408845... add token to api
    return axios.get(`/users/${id}`)
}
export const UpdateUserDetial=(id,fullname,department,job,phone,email,salary=0)=>{
    return axios.put(`/users/${id}`,{
        fullname,
        job,
        department,
        email,
<<<<<<< HEAD
        phone,
        salary
=======
        phone
>>>>>>> parent of b408845... add token to api
    })
}
export const LoginUser=(email,password)=>{
    return axios.post("/login",{
        email:email,
        password:password
    })
}