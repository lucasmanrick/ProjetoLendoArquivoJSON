import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.4.110:5500'
    
});

export default api;  