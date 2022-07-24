import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {
        let [postsList, setPostsList] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(value => setPostsList(value))
        }, []);
    return (
        <div>
            {postsList.map(value => <Comment item = {value}/>)}
        </div>
        )
     }
