import axios from 'axios';

export const DeptApi = axios.create({
    baseURL: 'http://127.0.0.1:8080'
});

export const fetchDepts = async () => {
    const response = await DeptApi.get(`/api/depts`);
    return response.data;
}