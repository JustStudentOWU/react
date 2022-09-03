import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {usersActions} from '../../redux'

export function Users() {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getAll())
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    )
}
