import {useEffect, useState} from "react";
import {getFilms} from "../../services/people.services";
import Episode from "../episode/Episode";

export default function Films() {

const [films, setFilms] = useState([]);
useEffect(()=>{
    getFilms().then(value => setFilms([...value.results]))
},[])

    return (

        <div>
            {
                films.map((value, i) => <Episode key={i} episode={value}/>)
            }
        </div>
    )
}
