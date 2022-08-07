import {useEffect, useState} from "react";
import {getPosts, getUsersPosts} from "../../services/posts.services";
import Post from "./Post";

export default function Posts({id}) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (id) {
            getUsersPosts(id).then(value => setPosts([...value]))
        } else {
            getPosts().then(value => setPosts([...value]))
        }
    }, [id]);
    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    )
}
