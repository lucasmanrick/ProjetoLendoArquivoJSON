import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.4.117'
    
});

export default api;  