import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <span className="navbar-brand ml-3">
          Todo App
        </span>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mr-3 mt-2 mt-lg-0">
            <li className="nav-item">
              <button
                className="nav-link text-white-50 bg-transparent border-0"
                data-toggle="modal"
                data-target="#modelRegisterId"
                style={{cursor: 'pointer'}}
              >
                Register
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="google.com">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="modal fade"
        id="modelRegisterId"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
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
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="inputName"
                      id="inputName"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="inputName"
                      id="inputName"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-sm btn-dark btn-block"
                    >
                      Register
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

export default Navbar;
