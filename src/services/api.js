import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-rocketbox.herokuapp.com'
});

export default api;