import axiosClient from './axiosClient';

const payslipApi = {
    GetAll(params){
        const url = '/payslips';
        return axiosClient.get(url, {params});
    },

    Get(id){
        const url = `/payslips/${id}`;
        return axiosClient.get(url);
    },

    Add(data){
        const url = '/payslips';
        return axiosClient.post(url, data);
    },

    Update(data){
        const url = `/payslips/${id}`;
        return axiosClient.put(url, data);
    },

    Remove(id){
        const url = `/payslips/${id}`;
        return axiosClient.delete(url);
    }
};

export default attendaceApi;