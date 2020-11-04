import React from 'react';

const Todo = ({ todos, errors, removeTodo, updateTodo }) => {
    console.log(errors)
    return (
        <div className="container my-4">
            {todos.length ? todos.map(todo=>(
                <div className="w-50 mx-auto my-2 item p-3 row" key={todo.id} >
                    <div className="col-1">
                        <span className="del" onClick={() => removeTodo(todo.id)}>X</span>
                    </div>
                    <div className="col-9">
                        <span>{todo.item}</span>
                    </div>
                    <div className="col-2">
                        <span className="text-white px-1 rounded pb-1 bg-warning status" onClick={() => updateTodo(todo.id)}>{todo.status}</span>
                    </div>
                </div>
            )): <h5 className="text-center">No todos available...</h5>}
        </div>
    )
}

export default Todo;