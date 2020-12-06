export const getTodos = () => {
    return fetch('http://127.0.0.1:8000/api/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    }).then(response=>{
        return response.json()
    })
}
// export const getUsers = async () => {
//     let response = await fetch('http://127.0.0.1:8000/users/')
//     let result = await response.json()
//     return result
// }
export const createTodo = (todo) => {
    return fetch('http://127.0.0.1:8000/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(todo)
    }).then(response => ( response.json() ))
}
export const deleteTodo = (todoId) => {
    return fetch(`http://127.0.0.1:8000/api/${todoId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    }).then(response => ( response.json() ))
}
export const putTodo = (todoId, todo) => {
    return fetch(`http://127.0.0.1:8000/api/${todoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(response => ( response.json() ))
}