import {useEffect, useState} from "react";
import {getPeople} from "../../services/people.services";
import Person from "../person/Person";

export default function People() {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        getPeople().then(value => setPeople([...value.results]))
    })
    return (
        <div>
            {
                people.map((value, index) => <Person key={index} person={value}/>)
            }
        </div>
        )
     }
