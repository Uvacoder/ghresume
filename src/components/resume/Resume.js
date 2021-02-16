import React from "react";

const Resume = ({ data }) => {
  return (
    <div>
      <h1>{data.user.name}</h1>
      <img src={data.user.avatarUrl} alt="" />
    </div>
  );
};

export default Resume;
