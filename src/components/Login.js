import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    //firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  // const idRegister = (e) => {
  //   e.preventDefault();
  //   //New Way working fine
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((auth) => {
  //       // Signed in
  //       if (auth) {
  //         history("/");
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorCode, errorMessage);
  //     });
  // };

  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt="Amazon_Logo"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        <form action="submit" className={classes.login__form}>
          <h5>E-mail</h5>
          <input
            type="text"
            name="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className={classes.login__signInButton} onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <Link to={"/createAccount"}>
          <button className={classes.login__registerButton}>
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
