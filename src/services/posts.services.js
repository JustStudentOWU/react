import {axiosInstance} from "./axios.services";
import {urls} from "../constants";

const postsServices = {
    getPosts: () => axiosInstance.get(urls.posts),
    getUserPosts: (id) => axiosInstance.get(urls.users + id + urls.posts),
}

export {postsServices}
