import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import RESUME_COMPONENTS from "../../query/GithubQuery";

import { gql } from "@apollo/client";

const Output = () => {
  let params = useParams();

  const BASIC_QUERY = gql`
    {
      user(login: "${params.username}") {
        ${RESUME_COMPONENTS}
      }
    }
  `;
  console.log(params.username);
  const { loading, error, data } = useQuery(BASIC_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
    return (
      <div>
        <h1>{data.user.name}</h1>
        <img src={data.user.avatarUrl} alt="" />
      </div>
    );
  }
};

export default Output;
