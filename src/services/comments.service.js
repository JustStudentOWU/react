import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getComments: () => axiosInstance.get(urls.comments),
    createComment: (comment) => axiosInstance.post(urls.comments),
    updateCommentById: (id, comment) => axiosInstance.put(urls.comments + id, comment),
    deleteComment: (id) =>  axiosInstance.delete(urls.comments + id)
};

export {commentsService};
