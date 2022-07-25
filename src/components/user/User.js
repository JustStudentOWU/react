import {useState} from "react";
import {getUserByPost} from "../../sevices/appService";
import UserPosts from "../userPosts/UserPosts";

export default function User({item}) {
    let [userPosts, setUsersPosts] = useState(null);
    let [toggle, setToggle] = useState(false);

    let findUserPosts = (id) => {
        setToggle(!toggle)
        getUserByPost(id).then(value => {
            setUsersPosts(value.data)
        })
    }
    return (
        <div className={'user'}>
            {item.id} - {item.name} <button onClick={() => {
                findUserPosts(item.id)
        }}>Posts</button>
            {
                userPosts && toggle && <UserPosts userPosts={userPosts}/>
            }
                <hr />
        </div>
        )
     }
