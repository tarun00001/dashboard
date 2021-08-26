import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();


const instance = axios.create({
    baseURL: 'https://insulink-backend.herokuapp.com/api/v1',
    headers:  { Authorization: `Bearer ${cookies.get("token")}`, 
    "Content-Type": "application/json" },
});

export default instance;
