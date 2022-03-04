// import React from 'react';
import "./login.css";
//import React, { Component } from "react";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="loginContainer">
    <div className="Login">
     
      <form onSubmit={handleSubmit} className="form">
      <h3>Login</h3>
        <div className="form-group" size="lg" controlId="username">
          <label className="label">Username</label>
          <input className="form-control"
            autoFocus
            type="username"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group" size="lg" controlId="password">
          <label className="label">Password</label>
          <input className="form-control"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

        <button className="btnform" type="submit" disabled={!validateForm()}>
          Login
        </button>
        
      </form>
    </div>
    </div>
  );
}
// export default function Login() {
//   return (
//     <div className="loginContainer">
//       <div>
//         <input className="loginInput">Username</input>
//       </div>
//       Login
//     </div>
//   )
// }

