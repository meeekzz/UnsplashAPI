import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization: 
    'Client-ID 3470a3bafb7594e74571e6dcc893fd33052224a0a4f76cc26a363f3cbd263ee2'
    }
});