export default function Comment({item}) {
    return (
        <div className={'text-container'}>
            {item.id} - {item.name}
        </div>
        )
     }
