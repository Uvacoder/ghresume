import React, { useEffect } from "react";
import allContributors from "../../contributors";

const Contributors = () => {
  console.log(allContributors);

  return (
    <div className="contributors">
      {allContributors.map((contributor) => (
        <div className="contributor">
          <h1>{contributor.name}</h1>
          <p>{contributor.github}</p>
        </div>
      ))}
    </div>
  );
};

export default Contributors;
