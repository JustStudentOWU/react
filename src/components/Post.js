import {postsActions} from "../redux";
import {useDispatch} from "react-redux";

export function Post({post}) {
    const {id, body, title} = post;
    const dispatch = useDispatch();

    return (
        <div>
            {id} -- {title} -- {body} -
            <button onClick={() => dispatch(postsActions.setPostForUpdate(post))}>update post</button> -
            <button onClick={() => dispatch(postsActions.deletePost({id}))}>delete post</button>
        </div>

        )
     }
