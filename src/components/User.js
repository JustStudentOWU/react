import {useDispatch} from "react-redux";
import {usersActions} from "../redux";

export function User({user}) {
    const {id, name, email, username} = user;
    const dispatch = useDispatch();

    return (
        <div>
            {id} - {name} - {email} - {username}
            <button onClick={() => dispatch(usersActions.setUserForUpdate(user))}>update User</button> -
            <button onClick={() => dispatch(usersActions.deleteUser({id}))}>delete User</button>
        </div>
    )
}
