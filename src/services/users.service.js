import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const usersServices = {
    getUsers: () => axiosInstance.get(urls.users),
    createUser: (user) => axiosInstance.post(urls.users, user),
    updateUserById: (id, user) => axiosInstance.put(urls.users + id, user),
    deleteUserById: (id) => axiosInstance.delete(urls.users + id),
}
export {usersServices}
