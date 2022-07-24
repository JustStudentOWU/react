export default function Album({findAlbum,item}) {
    return (
        <div>
            {item.id} - {item.title} <button onClick={()=>{
                findAlbum(item.id)
            console.log(item)
            }}>album body</button>
        </div>
        )
     }
