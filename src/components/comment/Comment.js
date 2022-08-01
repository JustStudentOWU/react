import {useForm} from "react-hook-form";
import {createComment} from "../../services/comment.services";

export default function Comment() {
    let {register,handleSubmit,formState:{errors}} = useForm({
        name: '',
        email: '',
        body: ''
    })
    const registerComment = (obj) => {
        console.log(obj)
        return createComment(obj).then((value) => console.log(value.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerComment)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span>Must be!</span>
                }
                <input type="text" {...register('email')}/>
                <input type="text" {...register('body')}/>
                <input type="submit"/>
            </form>
        </div>
        )
     }
