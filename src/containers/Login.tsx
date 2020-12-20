import React, {useState, useEffect} from 'react';
import fire from "../helper/base";
import "../App.css";

const Link = require("react-router-dom").Link;

const Login = (props:any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>User name</label>
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className="errorMessage">{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="errorMessage">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
            </>
          )}
        </div>
      </div>
    </section>


    // <div>
    //   <div>Login</div>

    //   <button><Link to="/dashboard">Success</Link></button>
    // </div>
  );
}
export default Login;