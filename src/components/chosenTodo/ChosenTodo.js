export default function ChosenTodo({item}) {
    return (
        <div>
            <h1>Task #{item.id} {item.completed.toString()}</h1>
        </div>
        )
     }
