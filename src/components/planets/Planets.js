import {useEffect, useState} from "react";
import {getPlanets} from "../../services/people.services";
import Planet from "../planet/Planet";

export default function Planets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then(value => setPlanets([...value.results]))
    })
    return (
        <div>
            {
                planets.map((value, index) => <Planet planet={value} key={index}/>)
            }
        </div>
    )
}
