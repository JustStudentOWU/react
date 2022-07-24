export default function Todo({item}) {
    return (
        <div>
            {item.id} - {item.title} - {item.title} - {item.completed.toString()}
        </div>
        )
     }
