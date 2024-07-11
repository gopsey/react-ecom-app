import axios from "axios";
import { API_BASE_URL } from '../config/config'
const httpService = axios.create({
   baseURL: process.env.REACT_APP_API_BASE_URL,
   headers: { 'Content-Type': 'application/json' }
})

// Perform any request interceptors for headers or response interceptors for central error handling

export default httpService;