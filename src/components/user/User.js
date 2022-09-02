import {useState} from "react";
import {usersServices} from "../../services";

export default function User({item}) {
    const [toggle,setToggle] = useState();
    const [chosenUser, setChosenUser] = useState();
    const findUser = (id) => {
        usersServices.getUser(id).then(value => {
            setToggle(!toggle);
            setChosenUser(value.data);
        })
    };
    return (
        <div>
            {item.id} -- {item.name} --- <button onClick={() => {
            findUser(item.id)
        }}>full info</button>
            <br/>
            {
                toggle && chosenUser && <div>{chosenUser.name} - {chosenUser.username} - {chosenUser.email}</div>
            }
        </div>
    )
}
