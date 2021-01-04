import axios from 'axios';
import {URL} from './../config'
const instance = axios.create({
    baseURL:URL
})
export default instance ;