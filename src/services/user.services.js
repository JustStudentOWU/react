import {axiosInstance} from "./axios.services";
import {urls} from '../constants';

const userServices = {
    getUsers: () => axiosInstance.get(urls.users),
    getUser: (id) => axiosInstance.get(urls.users + id)
}

export {userServices};
