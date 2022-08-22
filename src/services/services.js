import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => axiosInstance.get('/users').then(value => value.data);
const getPosts = () => axiosInstance.get('/posts').then(value => value.data);
const getComments = () => axiosInstance.get('/comments').then(value => value.data);
const getUserPosts = (id) => axiosInstance.get('/users/' + id + '/posts').then(value => value.data);
const getUserComments = (id) => axiosInstance.get('/users/' + id + '/comments').then(value => value.data);

export {
    getComments,
    getPosts,
    getUsers,
    getUserComments,
    getUserPosts
}
