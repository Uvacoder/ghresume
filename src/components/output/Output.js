import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import RESUME_COMPONENTS from "../../query/GithubQuery";
import "../../styles/Resume.css";

import { gql } from "@apollo/client";
import Resume from "../resume/Resume";
import { Button } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

const Output = () => {
  // let params = useParams();

  // const BASIC_QUERY = gql`
  //   {
  //     user(login: "${params.username}") {
  //       ${RESUME_COMPONENTS}
  //     }
  //   }
  // `;
  // console.log(params.username);
  // const { loading, error, data } = useQuery(BASIC_QUERY);

  // if (loading)
  //   return (
  //     <div className="loader flex">
  //       <div className="spinner">
  //         <div className="cube1"></div>
  //         <div className="cube2"></div>
  //       </div>
  //     </div>
  //   );
  // if (error) return <p>Something went wrong</p>;
  // if (data) {
  //   console.log(data);
  //   return (
  // <div className="output flex">
  //   <Resume data={data} username={params.username} />
  // </div>
  //   );
  // }
  return (
    <div className="output flex">
      <h1 className="raleway outputText">Cheers 🍻, Savio Martin</h1>
      <div className="btnCont flex">
        <Button variant="contained" className="btn raleway">
          Download Resume
          <GetApp className="downloadIcon" />
        </Button>
      </div>
      <div className="sampleResume"></div>
    </div>
  );
};

export default Output;
