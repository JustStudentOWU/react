import axios from "axios";

let axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
});

let getPostByComments = (id) => axiosInstance.get('/posts/' +id + '/comments')
let getUserByPost = (id) => axiosInstance.get('/users/' +id + '/posts')
let getUsers = () => axiosInstance.get('/users');

export {getPostByComments,
        getUserByPost,
        getUsers,
}
