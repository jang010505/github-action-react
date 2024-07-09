import axios from 'axios';

export const DeptApi = axios.create({
    baseURL: `http://${process.env.REACT_APP_SERVER_HOST}:80`
});

export const fetchDepts = async () => {
    const response = await DeptApi.get(`/api/depts`);
    return response.data;
}
