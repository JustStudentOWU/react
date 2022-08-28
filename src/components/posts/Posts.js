import {useEffect, useState} from "react";
import {postsServices} from "../../services/posts.services";
import Post from "../post/Post";

export default function Posts({id}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
            postsServices.getUserPosts(id).then(value => setPosts([...value.data]))
        } else {
            postsServices.getPosts().then(value => setPosts([...value.data]))
        }
    }, [id]);

    return (
        <div>
            {
                posts.map((value, index) => <Post key={index} item={value}/>)
            }
        </div>
    )
}
