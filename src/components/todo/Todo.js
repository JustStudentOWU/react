export default function Todo({item, findTodo}) {
    return (
        <div>
            {item.id} - {item.title} <button onClick={() => {
                findTodo(item.id)
        }}>do completed?</button>
        </div>
        )
     }
