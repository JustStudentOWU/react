const createUser = (obj) => {
   return fetch('https://jsonplaceholder.typicode.com/users',
       {
           method: 'POST',
           body: JSON.stringify(obj),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
           }
       })
       .then(response => response.json())
}
export {createUser}
