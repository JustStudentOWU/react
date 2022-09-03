import {useSelector} from "react-redux";
import {useState} from "react";

export function User({user}) {
    const [toggle, setToggle] = useState(false);
    const [chosenUser, setChosenUser] = useState(null);
    const {users} = useSelector(state => state.users);

    const findUser = (id) => {
        const user = users.find(value => value.id === id);
        setChosenUser(user);
        setToggle(!toggle);
    }

    return (
        <div>
            {user.id} -- {user.name} -- {user.email} --- <button onClick={() => {
            findUser(user.id)
        }}>info</button>
            <br/>
            {
                toggle &&
                chosenUser &&
                <div>{chosenUser.name} - {chosenUser.username} - {chosenUser.email}</div>
            }
        </div>
    )
}
