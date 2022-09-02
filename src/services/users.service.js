import {axiosInstance} from "./axios.service";
import {baseURL, urls} from "../constants";

const usersServices = {
    getUsers: () => axiosInstance.get(baseURL+urls.users),
    getUser: (id) => axiosInstance.get(baseURL+urls.users+id),
}
export {usersServices};
