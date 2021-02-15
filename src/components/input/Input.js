import React from "react";
import { useHistory } from "react-router-dom";
import monaHeart from "../../assets/mona-heart.png";

const Input = ({ username, handleUserName }) => {
  const history = useHistory();

  const openResumeForUsername = (e) => {
    if (e.keyCode === 13) {
      history.push("/build/" + username);
    }
  };

  return (
    <div className="main flex">
      <div className="main__left flex">
        <h2 className="raleway main__text">
          Generate professional resume fast and easy. We matter you future.
        </h2>
        <div className="input_cont flex">
          <img
            src={
              username < 1
                ? "https://avatars.githubusercontent.com/github?s=60"
                : "https://avatars.githubusercontent.com/" + username + "?s=60"
            }
            alt=""
            className="avatar"
          />
          <input
            type="text"
            id="usernameInput"
            value={username}
            onChange={(e) => handleUserName(e.target.value)}
            onKeyDown={(e) => openResumeForUsername(e)}
          />
        </div>
        <h5 className="addUsername">
          Just add your github username and see the magic
        </h5>
      </div>
      <div className="main__right flex">
        <img src={monaHeart} alt="Mona Heart" />
      </div>
    </div>
  );
};

export default Input;
