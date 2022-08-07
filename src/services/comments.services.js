import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getComments = () => axiosInstance.get('comments').then(value => value.data);
const getPostComments = (postId) => axiosInstance.get('posts/' + postId + '/comments').then(value => value.data);

export {
    getComments,
    getPostComments
}
