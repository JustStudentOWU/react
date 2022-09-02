import {useEffect, useState} from "react";
import {postsServices} from "../../services";
import Post from "../post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsServices.getPosts().then(value => setPosts(value.data))
    })
    return (
        <div>
            {
                posts.map((value, index) => <Post post={value} key={index}/> )
            }
        </div>
    )
}
