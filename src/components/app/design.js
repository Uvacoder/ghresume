import "../../styles/Resume.css";
import React from "react";
import {
  GitHub,
  Language,
  MailOutlineRounded,
  StarOutlineRounded,
  Twitter,
} from "@material-ui/icons";

const Design = () => {
  return (
    <div className="resume flex">
      <div className="resume_left flex">
        <div className="resume_left_top flex">
          <img
            src="https://avatars.githubusercontent.com/u/61895712?s=460&u=8d87038bb4ca4ee44fadb217bf49ff93c021f3b7&v=4"
            alt=""
            className="profilePic"
          />
          <h1 className="playfair">Savio Martin</h1>
        </div>
        <div className="resume_left_bottom">
          <div className="publicUrls flex">
            <MailOutlineRounded />
            <h5>
              <a href="http://savio.xyz/">http://savio.xyz/</a>
            </h5>
          </div>
          <div className="publicUrls flex">
            <Twitter />
            <h5>
              <a href="http://savio.xyz/">http://savio.xyz/</a>
            </h5>
          </div>
          <div className="publicUrls flex">
            <GitHub />
            <h5>
              <a href="http://savio.xyz/">http://savio.xyz/</a>
            </h5>
          </div>
          <div className="publicUrls flex">
            <Language />
            <h5>
              <a href="http://savio.xyz/">http://savio.xyz/</a>
            </h5>
          </div>
        </div>
      </div>
      <div className="resume_right flex">
        <div className="resume_right_top resume_right_comp">
          <h2 className="playfair">About</h2>
          <div className="line"></div>
          <h4>
            An Enthusiastic frontend developer, UI/UX Designer and a learner
          </h4>
        </div>
        <div className="resume_right_top_mid resume_right_comp">
          <h2 className="playfair">Github Status</h2>
          <div className="line"></div>
          <ul>
            <li>28 Public Repositories</li>
            <li>66 Followers</li>
            <li>389 Contributions</li>
            <li>29 Pull Requests</li>
            <li>9 Issues</li>
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
          <div className="repos flex">
            <div className="repo_details flex">
              <h4>Ludo</h4>
            </div>
            <div className="icons flex">
              <div className="codeType flex">
                <div
                  className="codeColor"
                  style={{ background: "yellow" }}
                ></div>
                <h4>Javascript</h4>
              </div>
              <div className="count flex">
                <StarOutlineRounded />
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="repos flex">
            <div className="repo_details flex">
              <h4>Ludo</h4>
            </div>
            <div className="icons flex">
              <div className="codeType flex">
                <div
                  className="codeColor"
                  style={{ background: "purple" }}
                ></div>
                <h4>CSS</h4>
              </div>
              <div className="count flex">
                <StarOutlineRounded />
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="repos flex">
            <div className="repo_details flex">
              <h4>Ludo</h4>
            </div>
            <div className="icons flex">
              <div className="codeType flex">
                <div
                  className="codeColor"
                  style={{ background: "yellow" }}
                ></div>
                <h4>Javascript</h4>
              </div>
              <div className="count flex">
                <StarOutlineRounded />
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="repos flex">
            <div className="repo_details flex">
              <h4>abcdefghijklmnopq</h4>
            </div>
            <div className="icons flex">
              <div className="codeType flex">
                <div
                  className="codeColor"
                  style={{ background: "yellow" }}
                ></div>
                <h4>Javascript</h4>
              </div>
              <div className="count flex">
                <StarOutlineRounded />
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="repos flex">
            <div className="repo_details flex">
              <h4>Ludo</h4>
            </div>
            <div className="icons flex">
              <div className="codeType flex">
                <div
                  className="codeColor"
                  style={{ background: "yellow" }}
                ></div>
                <h4>Javascript</h4>
              </div>
              <div className="count flex">
                <StarOutlineRounded />
                <h4>4</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
