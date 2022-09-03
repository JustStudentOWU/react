import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsAction} from "../../redux";
import {Post} from "../post/Post";

export function Posts() {
    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsAction.getAll())
    }, [])

    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}
