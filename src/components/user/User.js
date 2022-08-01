import {useForm} from "react-hook-form";
import {createUser} from "../../services/user.services";

export default function User() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            username: '',
            email: ''
        }
    });
    const registerUser = (obj) => {
        console.log(obj)
        createUser(obj).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <input type="submit"/>
            </form>
        </div>
        )
     }
