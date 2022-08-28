import {useEffect, useState} from "react";
import {commentsServices} from "../../services/comments.services";
import Comment from "../comment/Comment";

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsServices.getComments().then(value => setComments([...value.data]))
    })
    return (
        <div>
            {
                comments.map((value, index) => <Comment key={index} item={value}/>)
            }
        </div>
    )
}

