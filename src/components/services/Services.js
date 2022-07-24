import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
let getUsers = () => axiosInstance.get('/users');
let getPosts = () => axiosInstance.get('/posts');
let getAlbums = () => axiosInstance.get('/albums');
let getUser = (id) => axiosInstance('/users/' + id);
let getPost = (id) => axiosInstance('/posts/' +id);
let getAlbum = (id) => axiosInstance('/albums/' +id);

let getTodos = () => axiosInstance.get('/todos');
let getTodo = (id) => axiosInstance('/todos/' + id);
export {
    getTodo,
    getTodos,
    getPost,
    getPosts,
    getAlbum,
    getAlbums,
    getUsers,
    getUser
};
