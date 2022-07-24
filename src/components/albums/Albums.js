import Album from "../album/Album";

export default function Albums({findAlbum,item}) {
    return (
        <div>
            {item.map(value => <Album findAlbum = {findAlbum}
                                      item = {value}/>)}

        </div>
        )
     }
