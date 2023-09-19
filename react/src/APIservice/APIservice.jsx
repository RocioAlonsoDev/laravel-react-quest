import axios from 'axios'
import { Router } from 'react-router-dom'

const APIservice = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

APIservice.interceptors.request.use((config)=>{
    const token = '123'
    config.headers.Authorization = `Bearer ${token}`
    return config
})

APIservice.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401){
        Router.navigate('/login');
        return error;
    }
    throw error;
})

export default APIservice