import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getPosts: () => axiosInstance.get(urls.posts),
    createPost: (post) => axiosInstance.post(urls.posts, post),
    updatePostById: (id, post) => axiosInstance.put(urls.posts + id, post),
    deletePostById: (id) => axiosInstance.delete(urls.posts + id),
}
export {postsService}
