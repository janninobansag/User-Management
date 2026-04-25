import axios from 'axios';

export const user = axios.create({
    baseURL: "http://172.22.40.53:3000/myproxy/api/users"
})