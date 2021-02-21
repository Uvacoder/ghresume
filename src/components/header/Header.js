import React from "react";
import GithubCorner from "../header/GithubCorner";
import logo from "../../assets/logo48.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const gotoHome = () => {
    history.push("/");
  };
  return (
    <>
      <GithubCorner />
      <div className="header flex" onClick={gotoHome}>
        <div className="logoCont flex">
          <img src={logo} alt="" className="logoImg" />
          <h1 className="logo raleway">GhResume</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
