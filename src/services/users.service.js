import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getUsers: () => axiosInstance.get(urls.users),
    getUser: (id) => axiosInstance.get(urls.users+id)
}

export {usersService}
