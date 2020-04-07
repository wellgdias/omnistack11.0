import axions from 'axios';

const api = axions.create({
    baseURL: 'http://127.0.0.1:3333',
});

export default api;