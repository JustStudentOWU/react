import {useState} from "react";
import {getUser} from "../../sevices/appService";
import ChosenUser from "../chosenUser/ChosenUser";

export default function User({item}) {
    let [chosenUser, setChosenUser] = useState(null);
    let [toggle, setToggle] = useState(false);
    let findUser = (id) => {
        setToggle(!toggle)
        getUser(id).then(value => {
            setChosenUser(value.data)
        })
    }
    return (
        <div>
            {item.id} - {item.name} <button onClick={() => {
                findUser(item.id)
        }}>click</button>
                <hr />
            {
                chosenUser && toggle && <ChosenUser item={chosenUser}/>
            }
        </div>
        )
     }
