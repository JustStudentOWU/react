import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
const registerPost = (post) => axiosInstance.post('', post);
export {registerPost};
