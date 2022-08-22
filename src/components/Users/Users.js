import {useEffect, useState} from "react";
import {getUsers} from "../../services/services";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])
    return (
        <div>
            {
                users.map(value => <User user={value} key={value.id}/>)
            }
        </div>
    )
}
