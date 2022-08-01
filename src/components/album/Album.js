import {useForm} from "react-hook-form";
import {createAlbum} from "../../services/album.services";

export default function Album() {
    const {register,handleSubmit} = useForm({
        title: ''
    })
    const registerAlbum = (obj) => {
        createAlbum(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerAlbum)}>
                <input type="text" {...register('title')}/>
                <input type="submit"/>
            </form>
        </div>
        )
     }
