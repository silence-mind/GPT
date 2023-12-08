import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { dataBase } from "../../containers/SignINSignUp/FirebaseConfig";
import { signOut } from "firebase/auth";

export const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whpt3">What is GPT</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const history = useNavigate();

  const handleClick = () => {
    signOut(dataBase).then((val) => {
      console.log(val, "Back to SignUP, SignIn");
      history("");
    });
  };
  const SignUpLink = () => {
    return (
      <>
        <Link to="SignUp">Sign Up</Link>
        <Link to="SignUP" onClick={handleClick}>
          Logout
        </Link>
      </>
    );
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <SignUpLink />
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt3___navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <SignUpLink />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
