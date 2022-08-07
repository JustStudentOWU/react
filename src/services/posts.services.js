import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getPosts = () => axiosInstance.get('/posts').then(value => value.data);
const getUsersPosts = (id) => axiosInstance.get('/users/' + id + '/posts').then(value => value.data);

export {
    getPosts,
    getUsersPosts
}
