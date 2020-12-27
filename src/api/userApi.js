import axiosClient from './axiosClient';

const userApi = {
    GetAll(params){
        const url = '/users';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/users';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/users/${data.id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    }
};

export default userApi;