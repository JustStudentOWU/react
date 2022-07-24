import User from "../user/User";
import {useEffect, useState} from "react";

export default function Users() {
    let [usersList, setUsersList] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsersList(value))
    }, []);

    return (
        <div>
            {usersList.map(value => <User item = {value}/>)}
        </div>
        )
     }
