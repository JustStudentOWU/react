import {useEffect, useState} from "react";
import Album from "../album/Album";

export default function Albums() {
    let [albumsList, setAlbumsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => setAlbumsList(value))
    }, []);
    return (
        <div>
            {albumsList.map(value => <Album item = {value}/>)}
        </div>
        )
     }
