import axiosClient from './axiosClient';

const roleApi = {
    GetAll(params){
        const url = '/roles';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/roles/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/roles';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/roles/${id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/roles/${id}`;
        return axiosClient.delete(url);
    }
};

export default roleApi;