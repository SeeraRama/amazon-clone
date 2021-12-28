import React, { useState } from "react";
import { auth } from "../../firebasefile";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    signInWithEmailAndPassword(auth, username, password)
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    createUserWithEmailAndPassword(auth, username, password)
      .then((res) => {
        signInWithEmailAndPassword(auth, username, password)
          .then((res) => {
            if (res) {
              navigate("/");
            }
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        className="login__logo"
        alt="amazon logo"
      ></img>
      <div className="login__form">
        <form action="">
          <div className=" form__container">
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="login__form__input"
              type="email"
              name="email"
              id=""
              value={username}
              onChange={(e) => {
                e.preventDefault();
                setusername(e.target.value);
              }}
            />
          </div>
          <div className=" form__container">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="login__form__input"
              type="password"
              name="password"
              id=""
              value={password}
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="login__button" onClick={(e) => signIn(e)}>
              Sign In
            </button>
          </div>
          <div className="login__terms">
            <span>
              <h5>
                By Singing-in you agree to Amazon's Conditions of Use & Sale.
                Please see our Privacy Notice. our cookies Notice and our
                interest - Based Ads Notice.
              </h5>
            </span>
          </div>
          <div>
            <button
              className="login__Create__account "
              onClick={(e) => register(e)}
            >
              Create your Amazon Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
