import React from "react";
import {
  GitHub,
  Language,
  Launch,
  MailOutlineRounded,
  StarOutlineRounded,
  Twitter,
} from "@material-ui/icons";
import "../../styles/Resume.css";

const Resume = ({ data, username }) => {
  return (
    <div className="resume flex">
      <div className="resume_left flex">
        <div className="resume_left_top flex">
          <img src={data.user.avatarUrl} alt="" className="profilePic" />
          <h1 className="playfair">{data.user.name}</h1>
        </div>
        <div className="resume_left_bottom">
          {data.user.email ? (
            <div className="publicUrls flex">
              <MailOutlineRounded />
              <h6 style={{ fontSize: "11px" }}>
                <a href={"mailto:" + data.user.email}>{data.user.email}</a>
              </h6>
            </div>
          ) : (
            ""
          )}
          {data.user.twitterUsername ? (
            <div className="publicUrls flex">
              <Twitter />
              <h5>
                <a href={"https://twitter.com/" + data.user.twitterUsername}>
                  {data.user.twitterUsername}
                </a>
              </h5>
            </div>
          ) : (
            ""
          )}
          <div className="publicUrls flex">
            <GitHub />
            <h5>
              <a href={data.user.url}>{username}</a>
            </h5>
          </div>
          {data.user.websiteUrl ? (
            <div className="publicUrls flex">
              <Language />
              <h5>
                <a href={data.user.websiteUrl}>{data.user.websiteUrl}</a>
              </h5>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="resume_right flex">
        {data.user.bio.length > 8 ? (
          <div className="resume_right_top resume_right_comp">
            <h2 className="playfair">About</h2>
            <div className="line"></div>
            <h4>{data.user.bio}</h4>
          </div>
        ) : (
          ""
        )}

        <div className="resume_right_top_mid resume_right_comp">
          <h2 className="playfair">Github Status</h2>
          <div className="line"></div>
          <ul>
            <li>28 Public Repositories</li>
            <li>{data.user.followers.totalCount} Followers</li>
            <li>
              {
                data.user.contributionsCollection.contributionCalendar
                  .totalContributions
              }{" "}
              Contributions
            </li>
            <li>
              {data.user.contributionsCollection.totalPullRequestContributions}{" "}
              Pull Requests
            </li>
            <li>
              {data.user.contributionsCollection.totalIssueContributions} Issues
            </li>

            {data.user.isCampusExpert ? <li>Campus Expert</li> : ""}
            {data.user.isDeveloperProgramMember ? (
              <li>Developer Program Member</li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="resume_right_mid resume_right_comp">
          <h2 className="playfair">Skills</h2>
          <div className="line"></div>
          <div className="skills flex">
            <h4 className="skill">Javascript</h4>
            <h4 className="skill">CSS</h4>
            <h4 className="skill">Javascript</h4>
            <h4 className="skill">CSS</h4>
            <h4 className="skill">Javascript</h4>
            <h4 className="skill">CSS</h4>
            <h4 className="skill">Javascript</h4>
            <h4 className="skill">CSS</h4>
          </div>
        </div>
        <div className="resume_right_bottom resume_right_comp">
          <h2 className="playfair">Featured Projects</h2>
          <div className="line"></div>
          {data.user.pinnedItems.nodes.map((repo) => (
            <a href={repo.url} key={repo.id}>
              <div className="repos flex">
                <div className="repo_details flex">
                  <h5>{repo.name}</h5>
                </div>
                <div className="icons flex">
                  <div className="codeType flex">
                    <div
                      className="codeColor"
                      style={{
                        background: `${repo.languages.edges[0].node.color}`,
                      }}
                    ></div>
                    <h5>{repo.primaryLanguage.name}</h5>
                  </div>
                  <div className="count flex">
                    <div className="starCount flex">
                      <StarOutlineRounded />
                      {repo.stargazers.totalCount > 1000 ? (
                        <h5>{(repo.stargazers.totalCount % 1000) + "k"}</h5>
                      ) : (
                        <h5>{repo.stargazers.totalCount}</h5>
                      )}
                    </div>
                    <a href={repo.url} className="openCode">
                      <Launch />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
