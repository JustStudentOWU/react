import {useForm} from "react-hook-form";
import {registerPost} from "../../services/post.services";

export default function Post() {
    const {register, handleSubmit} = useForm({
        title: '',
        body: ''
    })
const createPost = (post) => {
    console.log(post)
    return registerPost(post).then(value => console.log(value.data))
}

    return (
        <div>
            <form onSubmit={handleSubmit(createPost)}>
                <input type="text" {...register('name')}/>
                <input type="text"{...register('body')}/>
                <input type="submit"/>
            </form>
        </div>
        )
     }
