import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersActions} from "../redux";

export function UsersForm() {
    const {register, handleSubmit, setValue, reset} = useForm();
    const dispatch = useDispatch();
    const {userForUpdate} = useSelector(state => state.users);

    useEffect(() => {
        if (userForUpdate) {
            setValue('name', userForUpdate.name);
            setValue('email', userForUpdate.email);
            setValue('username', userForUpdate.username);
        }
    }, [userForUpdate, setValue]);

    const submit = async (data) => {
        if (userForUpdate) {
            await dispatch(usersActions.updateUser({id: userForUpdate.id, user: data}))
        } else {
            await dispatch(usersActions.createUser({user: data}))
        }
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <button>{userForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}
