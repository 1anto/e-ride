import React, {useState, useEffect} from 'react';
import fire from "./helper/base";
import "./App.css";

import Navbar from "./containers/Navbar";
import Pokemon from "./containers/Pokemon";
import Login  from "./containers/Login";
import DetailsPage from "./containers/DetailsPage";
import Dashboard from "./containers/Dashboard";
import SignUp from './containers/SignUp';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

function App() {

  const[user, setUser] = useState<any>("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[emailError, setEmailError] = useState("");
  const[passwordError, setPasswordError] = useState("");
  const[hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  }, []);
  

  return (
    <div className="App">
      {user ? (
        // <Dashboard handleLogout={() => handleLogout}/>
        <>

      {/* <Route exact path="/"><Login/></Route> */}
      <Route path="/signUp"><SignUp/></Route>
      <Route exact path="/"><Dashboard handleLogout={() => handleLogout}/></Route>
      <Route path="/details/:id"><DetailsPage/></Route>
        </>
      ) : (
        <Route exact path="/">
          <Login email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
        </Route>
      )}

      {/* <Navbar/> */}


      { /* Route components are rendered if the path prop matches the current URL */}
      {/* <Route exact path="/"><Login/></Route>
      <Route path="/signUp"><SignUp/></Route>
      <Route path="/dashboard"><Dashboard/></Route>
      <Route path="/details/:id"><DetailsPage/></Route>

      <Route exact path="/pokemon"><Pokemon /></Route> */}
      {/* <Route path="/login" component={LoginContainer}/> */}
      {/* <Route path="/details/:id" component={DetailsContainer} /> */}
    </div>
  );
}

export default App;
