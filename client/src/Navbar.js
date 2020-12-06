import React from "react";
import LoginModal from "./LoginModal";

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
                Login
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

      <LoginModal />
    </div>
  );
}

export default Navbar;
