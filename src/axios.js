import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mern-instagram-clone-abhirup.herokuapp.com',
})

export default instance;