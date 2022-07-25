import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../sevices/appService";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    },[])
    return (
        <div className={'users'}>
            {
                users.map(value => <User key ={value.id} item = {value} />)
            }
        </div>
        )
     }
