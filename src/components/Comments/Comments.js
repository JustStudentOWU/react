import {useEffect, useState} from "react";
import {getComments, getPostComments} from "../../services/comments.services";
import Comment from "./Comment";

export default function Comments({postId}) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        if (postId) {
            getPostComments(postId).then(value => setComments([...value]))
        } else {
            getComments().then(value => setComments([...value]))
        }
    }, [postId])
    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    )
}
