import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getComments: () => axiosInstance.get(urls.comments)
}

export {commentsService}
