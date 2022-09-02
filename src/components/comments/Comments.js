import {useEffect, useState} from "react";
import {commentsServices} from '../../services'
import {Comment} from "../comment";

export function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsServices.getComments().then(value => setComments(value.data))
    })
    return (
        <div>
            {
                comments.map((value, index) => <Comment comment={value} key={index}/>)
            }
        </div>
    )
}
