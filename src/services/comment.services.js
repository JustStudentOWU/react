import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
})

const createComment = (comment) => axiosInstance.post('',comment);

export {
    createComment
}
