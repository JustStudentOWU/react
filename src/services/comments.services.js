import {axiosInstance} from "./axios.services";
import {urls} from "../constants";

const commentsServices = {
    getComments: () => axiosInstance.get(urls.comments),
    getComment: (id) => axiosInstance.get(urls.comments + id),
}

export {commentsServices}
