
import React from "react"
import { useGlobalState } from '../../global/UserGlobalData'
import HeaderForAuth from "../header/HeaderForAuth";


function Register() {
  const [user, setUser] = useGlobalState('user');

    return(
      <div>
        <HeaderForAuth/>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={event => {
            event.preventDefault();
            setUser({
                "username": event.target.username.value,
                "password": event.target.password.value,
                "email": event.target.email.value
            })
          }}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Your First Name"
                  name="first-name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Your Last Name"
                  name="last-name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Your Username"
                  name="username"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Return <a href="#">Sign In</a>
              </p>
              <a style={{ fontSize: "14px" }} href="/login">Already Registered?</a>
            </div>
          </form>
        </div>
      </div>
    )

}

export default Register;
