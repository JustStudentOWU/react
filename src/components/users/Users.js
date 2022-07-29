import {useEffect, useState} from "react";
import {getUsers} from "../services/api";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => {
            setUsers(value.data)
        })
    },[])

    return (
        <div>
            {users.map((value, index) => <User key={index} item={value}/>)}
        </div>
        )
     }
