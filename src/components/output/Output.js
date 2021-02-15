import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RESUME_COMPONENTS from "../../query/GithubQuery";

const Output = () => {
  let params = useParams();

  // const githubUserAPI = "https://api.github.com/users/" + params.username;
  // useEffect(() => {
  //   fetch(githubUserAPI)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const { loading, error, data } = useQuery(RESUME_COMPONENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data) console.log(data);

  return (
    <h1>
      Current id parameter is <strong>{params.username}</strong>
    </h1>
  );

  // return (
  //   <div className="output">
  //     <div>
  //       In React Router v5, You can use hooks to get parameters.
  //       <br />
  //       Current id parameter is <strong>{params.username}</strong>
  //     </div>
  //   </div>
  // );
};

export default Output;
