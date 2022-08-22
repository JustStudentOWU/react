import {useEffect, useState} from "react";
import {getPosts, getUserPosts} from "../../services/services";
import Post from "./Post";

export default function Posts({id}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (id) {
            getUserPosts(id).then(value => setPosts([...value]))
        } else
            getPosts().then(value => setPosts([...value]))
    }, [id])
    return (
        <div>
            {
                posts.map((value, index) => <Post key={index} post={value}/>)
            }
        </div>
    )
}
