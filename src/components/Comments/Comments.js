import {useEffect, useState} from "react";
import {getComments, getUserComments} from "../../services/services";
import Comment from "./Comment";

export default function Comments({id}) {
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        if (id) {
            getUserComments(id).then(value => setComments([...value]))
        }
        getComments().then(value => setComments([...value]))
    },[id])
    return (
        <div>
            {
                comments.map((value, index) => <Comment key={index} comment={value}/>)
            }
        </div>
        )
     }
