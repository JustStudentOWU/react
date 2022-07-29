import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

let getUsers = () => axiosInstance.get('users');
let getPosts = () => axiosInstance.get('posts');
let getComments = () => axiosInstance.get('comments');
let getUserById = (id) => axiosInstance.get('users/' + id);
let getUserPosts = (id) => axiosInstance.get('users/' + id + '/posts');

export {
    getPosts,
    getUserPosts,
    getUsers,
    getUserById,
    getComments,
}
