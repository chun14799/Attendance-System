import axiosClient from './axiosClient';

const attendanceApi = {
    GetAll(params){
        const url = '/attendaces';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/attendaces/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/attendaces';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/attendaces/${id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/attendaces/${id}`;
        return axiosClient.delete(url);
    }
};

export default attendaceApi;