import {useForm} from "react-hook-form";
import {createTodo} from "../../services/todo.services";

export default function Todo() {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            title: '',
            completed: '',
        }
    });
    const registerTodo = (obj) => {
        return createTodo(obj).then(value => console.log(value))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(registerTodo)}>
                <input type="text" {...register('title')}/>
                <input type="text" {...register('completed')}/>
                <input type="submit"/>
            </form>
        </div>
        )
     }
