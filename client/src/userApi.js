export const getUsers = () => {
    return fetch('http://127.0.0.1:8000/users/user/').then(response=>{
        return response.json()
    })
}
export const loginUser = (user) => {
    return fetch('http://127.0.0.1:8000/users/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    } )
}