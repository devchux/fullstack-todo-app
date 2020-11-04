import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AddTodo from "./addform";
import Todo from "./todo";
import { getTodos, createTodo, deleteTodo, putTodo } from "./todoApi";

function App() {
  const [todos, setTodos] = useState({ todoItems: [], errors: {} });
  useEffect(() => {
    getTodos()
      .then((result) => {
        setTodos({ ...todos, todoItems: result });
      })
      .catch((err) => setTodos({ ...todos, errors: err }));
  }, []);
  function addTodo(todo) {
    createTodo(todo)
      .then((result) =>
        setTodos({ ...todos, todoItems: [...todos.todoItems, result] })
      )
      .catch((err) => {
        setTodos({ ...todos, errors: err });
      });
  }
  function updateTodo(todoId) {
    let todo = todos.todoItems.filter((todo) => todo.id === todoId)[0];
    todos.todoItems.filter((todo) => todo.id !== todoId)
    let updatedTodo = {
      item: todo.item,
      status: todo.status === "pending" ? "done" : "pending",
    };
    putTodo(todoId, updatedTodo)
      .then((result) =>
        setTodos({ ...todos, todoItems: [...todos.todoItems, result] })
      )
      .catch((err) => setTodos({ ...todos, errors: err }));
  }
  function removeTodo(todoId) {
    deleteTodo(todoId).catch((err) => setTodos({ ...todos, errors: err }));
  }
  return (
    <div>
      <Navbar />
      <AddTodo addTodo={addTodo} />
      <Todo
        todos={todos.todoItems}
        errors={todos.errors}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
