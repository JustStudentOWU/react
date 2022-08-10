import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

const getPeople = () => axiosInstance.get('people').then(value => value.data);
const getPlanets = () => axiosInstance.get('planets').then(value => value.data);
const getFilms = () => axiosInstance.get('films').then(value => value.data);
const getEpisode = (id) => axiosInstance.get('films/' + id + '/').then(value => value.data);

export {
    getPeople,
    getPlanets,
    getFilms,
    getEpisode
}
