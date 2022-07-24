import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPostsList(value));
    },[])

    return (
        <div>
            {postsList.map(value => <Post item = {value}/>)}
        </div>
        )
     }
