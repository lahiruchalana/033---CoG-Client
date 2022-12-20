
import React, { useState } from "react"
import { useGlobalState } from "../../global/UserGlobalData";
import HeaderForAuth from "../header/HeaderForAuth";

function Login() {
  const [username, setUsername] = useGlobalState('username');
  const [password, setPassword] = useGlobalState('password');


    return(
      <div>
        <HeaderForAuth/>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={event => {
            event.preventDefault();
            setPassword(event.target.password.value);
            setUsername(event.target.username.value);
            }}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Username"
                  name="username"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <a style={{ fontSize: "14px" }} href="/user_registration">Not Registered?</a>
            </div>
          </form>
        </div>
      </div>
    )

}

export default Login;
