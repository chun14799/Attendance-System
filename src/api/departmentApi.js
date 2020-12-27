import axiosClient from './axiosClient';

const departmentApi = {
    GetAll(params){
        const url = '/departments';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/departments/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/departments';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/departments/${id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/departments/${id}`;
        return axiosClient.delete(url);
    }
};

export default departmentApi;