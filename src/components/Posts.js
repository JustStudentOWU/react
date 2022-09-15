import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsActions} from "../redux";
import {Post,PostsForm} from '../components'

export function Posts() {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    useEffect(()=>{
        dispatch(postsActions.getAll())
    },[])
    return (
        <div>
            <PostsForm/>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
        )
     }
