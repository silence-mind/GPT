import ParticleBackground from "../../../Particle/ParticleBackground";
import "./SignUp.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { dataBase } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const Home = useNavigate();
  const [login, setLogin] = useState();
  const [error, setError] = useState(null);

  const Submithandler = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(dataBase, email, password)
        .then((data) => {
          console.log(data, "authData");
          Home("/");
        })
        .catch((err) => {
          setError(err.code);
        });
    } else {
      signInWithEmailAndPassword(dataBase, email, password)
        .then((data) => {
          console.log(data, "authData");
          Home("/");
        })
        .catch((err) => {
          setError(err.code);
        });
    }
  };
  return (
    <div className="Sign_up-container">
      <form
        onSubmit={(e) => Submithandler(e, login ? "signin" : "signup")}
        className="form_sign-up"
      >
        <div className="row">
          <div
            className={login === false ? "activecolor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>
          <div
            className={login === true ? "activecolor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SignIn
          </div>
        </div>
        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <div className="input_email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input_password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="bn13" type="submit">
          {login ? "SignIn" : "SignUp"}
        </button>
        <div className="forget_password">
          <p>
            {login ? "Forget Password ? " : ""}{" "}
            <span>{login ? "Click" : ""}</span>
          </p>
        </div>
        <a href="http/google.com" tabIndex="0">
          <img
            className="bn45"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt="bn45"
          />
        </a>
        {error && <div className="error">{error} </div>}
      </form>
      <ParticleBackground />
    </div>
  );
};

export default SignUp;
