import {useEffect, useState} from "react";
import {getPosts} from "../services/api";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    })
    return (
        <div>
            {posts.map((value, index) => <Post item={value} key={index}/>)}
        </div>
        )
     }
