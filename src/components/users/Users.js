import {useEffect, useState} from "react";
import {usersServices} from "../../services";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices.getUsers().then(value => {
            setUsers(value.data)
        })
    }, []);
    return (
        <div>
            {
                users.map(value => <User key ={value.id} item = {value} />)
            }
        </div>
    )
}
