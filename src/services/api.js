import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-yago.herokuapp.com',
});

export default api;