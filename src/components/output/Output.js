import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Output = () => {
  let params = useParams();

  const github_data = {
    token: "11d8b0f36ce132818cead3107f3b5d9db0784454",
    username: "saviomartin",
  };

  const githubUserAPI = "https://api.github.com/users/" + params.username;
  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: "token 11d8b0f36ce132818cead3107f3b5d9db0784454",
      },
      body: JSON.stringify({
        query: `
    query {
      user(login: "saviomartin") {
        bio
        avatarUrl
        createdAt
        name
        websiteUrl
        url
        twitterUsername
        isHireable
        location
      }
    }
    `,
      }),
    })
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
