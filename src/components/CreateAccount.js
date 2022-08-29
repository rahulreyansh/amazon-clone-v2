import React, { useState } from "react";
import classes from "./CreateAccount.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function CreateAccount() {
  const [displayName, setdisplayName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const newUserRegistration = (e) => {
    //firebase registration
    e.preventDefault();
    //New Way working fine
    createUserWithEmailAndPassword(auth, email, password)
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
        <h1>Create Account</h1>
        <form action="submit" className={classes.login__form}>
          <h4>Your Name</h4>
          <input
            placeholder="First and Last Name"
            type="text"
            name="your name"
            value={displayName}
            onChange={(e) => setdisplayName(e.target.value)}
          ></input>
          <h4>Mobile number</h4>
          <input
            type="mobile"
            name="mobile"
            placeholder="Mobile number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          ></input>
          <h4>Email (optional)</h4>
          <input
            type="mobile"
            name="mobile"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h4>Password</h4>
          <input
            type="mobile"
            name="mobile"
            placeholder="At least 6 characters"
            value={password.trim()}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className={classes.passwordWarning}>
            ❗Passwords must be at least 6 characters.
          </p>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to={"/createAccount"}>
          <button
            className={classes.login__signInButton}
            onClick={newUserRegistration}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
