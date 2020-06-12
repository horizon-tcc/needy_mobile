import axios from 'axios';

const api = axios.create({
     baseURL: "http://needy-api.herokuapp.com/"
});

export default api;