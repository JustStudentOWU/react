import {axiosInstance} from "./axios.service";
import {baseURL, urls} from "../constants";

const postsServices = {
    getPosts: () => axiosInstance.get(baseURL+urls.posts)
}
export {postsServices}
