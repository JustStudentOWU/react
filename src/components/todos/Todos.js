import Todo from "../todo/Todo";

export default function Todos({item, findTodo}) {
    return (
        <div>
            {
                item.map(value => <Todo item={value} findTodo={findTodo} key = {value.id}/>)
            }
        </div>
        )
     }
