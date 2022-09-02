import {axiosInstance} from "./axios.service";
import {baseURL, urls} from "../constants";

const commentsServices = {
    getComments: () => axiosInstance.get(baseURL+urls.comments)
}

export {commentsServices}
