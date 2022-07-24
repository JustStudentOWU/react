export default function Post({item,findPost}) {
    return (

        <div>
            {item.id} - {item.title} <button onClick={() => {
                findPost(item.id)
        }
        }>more info</button>
        </div>
        )
     }
