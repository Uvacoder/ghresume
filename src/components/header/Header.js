import React from "react";
import GithubCorner from "../header/GithubCorner";
import logo from "../../assets/logo48.png";
const Header = () => {
  return (
    <>
      <GithubCorner />
      <div className="header flex">
        <img src={logo} alt="" className="logoImg" />
        <h1 className="logo raleway">GhResume</h1>
      </div>
    </>
  );
};

export default Header;
