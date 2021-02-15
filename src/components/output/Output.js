import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Output = () => {
  let params = useParams();

  const githubUserAPI = "https://api.github.com/users/" + params.username;
  useEffect(() => {
    fetch(githubUserAPI)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="output">
      <div>
        In React Router v5, You can use hooks to get parameters.
        <br />
        Current id parameter is <strong>{params.username}</strong>
      </div>
    </div>
  );
};

export default Output;
