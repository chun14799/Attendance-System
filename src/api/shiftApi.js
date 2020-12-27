import axiosClient from './axiosClient';

const shiftApi = {
    GetAll(params){
        const url = '/shifts';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/shifts/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/shifts';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/shifts/${id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/shifts/${id}`;
        return axiosClient.delete(url);
    }
};

export default shiftApi;