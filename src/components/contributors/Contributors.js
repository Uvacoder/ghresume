import { GitHub } from "@material-ui/icons";
import React, { useEffect } from "react";
import allContributors from "../../contributors";

const Contributors = () => {
  console.log(allContributors);

  return (
    <div className="contributors flex">
      {allContributors.map((contributor) => (
        <div
          className="contributor animate__animated animate__fadeInDown"
          key={contributor.github}
        >
          <img
            src={"https://avatars.githubusercontent.com/" + contributor.github}
            alt=""
          />
          <h2>{contributor.name}</h2>
          <a href={"https://github.com/" + contributor.github}>
            <div className="githubUser flex">
              <GitHub />
              <p>{contributor.github}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contributors;
