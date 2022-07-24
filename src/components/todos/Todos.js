import {useEffect, useState} from "react";
import Todo from "../todo/Todo";

export default function Todos() {
    let [todosList, setTodosList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => setTodosList(value))
    }, []);
    return (
        <div>
            {todosList.map(value => <Todo item= {value}/>)}
        </div>
        )
     }
