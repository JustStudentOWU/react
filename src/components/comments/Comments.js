import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Comment} from "../comment/Comment";
import {commentsActions} from "../../redux";

export function Comments() {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(commentsActions.getAll())
    },[])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
        )
     }
