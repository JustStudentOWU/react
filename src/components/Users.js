import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {usersActions} from "../redux";
import {User} from "./User";
import {UsersForm} from "./UsersForm";

export function Users() {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getAllUsers());
    }, []);

    return (
        <div>
            <UsersForm/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    )
}
