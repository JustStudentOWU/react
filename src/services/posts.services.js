import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getPosts = () => axiosInstance.get('/posts').then(value => value.data);

export {
    getPosts
}
