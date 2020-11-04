import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState({ item: null, status: null });
  let handleChange = (e) => {
    setTodo({ item: e.target.value, status: 'pending' });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.item === " " || todo.item == null) {
      return false;
    } else {
      addTodo(todo)
      setTodo({ id: null, item: null, status: null, date_created: null });
    }
  };
  
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-dark btn-md mt-4"
        data-toggle="modal"
        data-target="#modelId"
      >
        Add Todos
      </button>

      <div
        className="modal fade"
        id="modelId"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Todo</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="inputName"
                      id="inputName"
                      placeholder="Enter Item"
                      onChange={handleChange}
                      value={todo.item == null ? "" : todo.item}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-sm btn-dark btn-block"
                    >
                      Add Todo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
