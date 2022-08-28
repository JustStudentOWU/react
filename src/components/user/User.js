import {Link} from "react-router-dom";
import {useState} from "react";
import {userServices} from "../../services/user.services";

export default function User({item}) {
    const [toggle, setToggle] = useState(false);
    const [chosenUser, setChosenUser] = useState(null);

    const findUser = (id) => {
        setToggle(!toggle);
        userServices.getUser(id).then(value => setChosenUser([value.data]))
    }
    return (
        <div>
            {item.name}
            - <span><Link to={item.id.toString()}>user posts </Link></span>
            - <span><button onClick={() => {
            findUser(item.id)
        }}>User details</button></span>
            <br/>
            <div>
                {chosenUser && toggle && <div className={'chosenUser'}>{item.name} - {item.username} -- {item.email}</div>}
            </div>
        </div>
    )
}
