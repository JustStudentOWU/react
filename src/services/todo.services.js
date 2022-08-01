const createTodo = (todo) => {
    return fetch('https://jsonplaceholder.typicode.com/todos',
        {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
}
export {createTodo}
