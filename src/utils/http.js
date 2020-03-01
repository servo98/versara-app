import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.VUE_APP_SERVICE_URL ||
    'http://localhost:8080/',
});

export default axiosInstance;
