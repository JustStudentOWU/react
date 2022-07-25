import {useState} from "react";
import {getPostByComments} from "../../sevices/appService";
import PostComment from "../postComment/PostComment";

export default function UserPost({item}) {
    let [postComments, setPostComments] = useState(null);
    let [toggle, setToggle] = useState(false);

    let findPostComments = (id) => {
        getPostByComments(id).then(value => {
            setPostComments(value.data);
            setToggle(!toggle);
        })
    }
    return (
        <div className={'user-post'}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <button onClick={() => {
                findPostComments(item.id)
            }}>Comments</button>

            <hr/>
            {
                toggle && postComments && postComments.map(value => <PostComment item = {value} key ={value.id}/>)
            }
            <hr/>
        </div>
        )
     }
