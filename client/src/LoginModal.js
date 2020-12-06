import React, { useState } from 'react'
import { loginUser } from './userApi';

function LoginModal() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const handleChange = e => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(user).then(data => {
          if(data.token) localStorage.setItem('token', data.token)
        })
    }
    return (
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
              <h5 className="modal-title">Login</h5>
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
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      onChange={handleChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-sm btn-dark btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginModal