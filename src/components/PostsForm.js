import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {postsActions} from "../redux";

export function PostsForm() {
    const dispatch = useDispatch();
    const {postForUpdate} = useSelector(state => state.posts);
    const {handleSubmit, reset, register, setValue} = useForm();

    useEffect(() => {
        console.log(postForUpdate)
        if (postForUpdate) {
            setValue('id', postForUpdate.id);
            setValue('title', postForUpdate.title);
            setValue('body', postForUpdate.body);
        }
    }, [postForUpdate, setValue]);

    const submit = async (data) => {
        if (postForUpdate) {
            await dispatch(postsActions.updatePost({id: postForUpdate.id, post: data}))
        } else {
            await dispatch(postsActions.createNewPost({post: data}))
        }
        reset();
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'id'} {...register('id')}/>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>{postForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}
