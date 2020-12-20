import React, {useState, useEffect} from 'react';
import fire from "../helper/base";

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
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="auth-submit-btn" onClick={handleLogin}>Sign in</button>
              <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
          ) : (
            <>
              <button className="auth-submit-btn" onClick={handleSignup}>Sign up</button>
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