import axios from "axios";

let axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
});

let getUsers = () => axiosInstance.get('/users');
let getUser = (id) =>  axiosInstance('/users/' + id);

export {getUser, getUsers}
