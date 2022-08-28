import {useEffect, useState} from "react";
import {userServices} from "../../services/user.services";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userServices.getUsers().then(value => setUsers([...value.data]));

    }, []);

    return (
        <div>
            {
                users.map((value, index) => <User key={index} item={value} />)
            }
        </div>
    )
}
