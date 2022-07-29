import {useState} from "react";
import {getUserById, getUserPosts} from "../services/api";
import UserPost from "../userPost/UserPost";

export default function User({item}) {
    let [userPosts, setUserPosts] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);
    let [toggleUser, setToggleUser] = useState(false);
    let [toggleUserPosts, setToggleUserPosts] = useState(false);

    let findUser = (id) => {
        getUserById(id).then(value => {
            setChosenUser(value.data);
            setToggleUser(!toggleUser);
            setToggleUserPosts(false)
        })
    }

    let findUserPosts = (id) => {
        getUserPosts(id).then(value => {
            setUserPosts(value.data);
            setToggleUserPosts(!toggleUserPosts);
            setToggleUser(false);
        })
    }
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={() => {
                findUser(item.id)
            }}>info</button>
            <button onClick={() => {
                findUserPosts(item.id)
            }}>posts</button>
            <div className={'div-class'}>
            {chosenUser && toggleUser && <div>{chosenUser.email} - {chosenUser.username}</div>}
            </div>
            <div className={'div-class'}>
            {chosenUser && toggleUserPosts && userPosts.map((value, index) => <UserPost item={value} key={index}/>)}
            </div>
        </div>
        )
     }
