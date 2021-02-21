import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import RESUME_COMPONENTS from "../../query/GithubQuery";
import "../../styles/Resume.css";

import { gql } from "@apollo/client";
import Resume from "../resume/Resume";
import { Button, Tooltip } from "@material-ui/core";
import { ChevronRight, GetApp, PictureAsPdf } from "@material-ui/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import $ from "jquery";

const Output = () => {
  let params = useParams();

  //Checking which browser is working on
  var isFirefox = typeof InstallTrigger !== "undefined";
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  if (isFirefox) {
    console.log("Firefox");
  } else {
    console.log("Chrome");
  }

  const BASIC_QUERY = gql`
    {
      user(login: "${params.username}") {
        ${RESUME_COMPONENTS}
      }
    }
  `;
  console.log(params.username);
  function download(url) {
    var a = $("<a style='display:none' id='js-downloder'>")
      .attr("href", url)
      .attr("download", `${params.username}.png`)
      .appendTo("body");

    a[0].click();

    a.remove();
  }

  function saveCapture() {
    var element = document.querySelector("#resume");
    html2canvas(element, {
      useCORS: true,
      allowTaint: false,
      width: 500,
      height: 700,
    }).then(function (canvas) {
      download(canvas.toDataURL("image/png"));
    });
  }

  const printPDF = () => {
    window.print();
  };

  const { loading, error, data } = useQuery(BASIC_QUERY);

  if (loading)
    return (
      <div className="loader flex">
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </div>
    );
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
    return (
      <div className="output flex">
        <div className="left flex">
          <div className="cont">
            <h1 className="raleway outputText">Cheers 🍻, {data.user.name}</h1>
            <div className="btnCont flex">
              <Tooltip title="Download Resume">
                <Button
                  variant="contained"
                  className="btn raleway"
                  onClick={saveCapture}
                  id="downloadResume"
                >
                  Download Resume
                  <GetApp className="downloadIcon" />
                </Button>
              </Tooltip>
              {isChrome ? (
                <div className="printCont">
                  <h5 className="printContText">Recommended on Chrome</h5>
                  <Tooltip title="Print Resume">
                    <Button
                      variant="contained"
                      className="btn raleway"
                      onClick={printPDF}
                      id="printPDFBtn"
                    >
                      Print Resume
                      <PictureAsPdf className="downloadIcon" />
                    </Button>
                  </Tooltip>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div id="resume" className="sampleResume">
            <Resume
              data={data}
              username={params.username}
              id="finishedResume"
            />
          </div>
        </div>
        <div className="right flex">
          <div className="next">
            <Tooltip title="Coming Soon">
              <ChevronRight className="nextArrow" />
            </Tooltip>
            <h4 className="try">Try theme 2</h4>
            <h5 className="coming">Coming Soon</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default Output;
