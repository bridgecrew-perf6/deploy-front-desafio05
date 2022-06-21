import axios from 'axios';
import {getItem} from '../utils/storage'

const token = getItem('token')

export default axios.create({
    baseURL: 'https://api-desafio5.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    }
});

