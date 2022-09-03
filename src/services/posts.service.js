import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAllPosts: () => axiosInstance.get(urls.posts)
}
export {postsService}
