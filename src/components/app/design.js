import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";

const Design = () => {
  const printPDF = () => {
    const domElement = document.getElementById("resume");
    html2canvas(domElement, {
      // using cors to get external images
      useCORS: true,
      onclone: (document) => {
        document.getElementById("print").style.visibility = "hidden";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  };
  return (
    <div className="App">
      <h1>Generate PDF</h1>
      <div id="resume">
        <p>This will appear</p>
        <img src="https://avatars.githubusercontent.com/saviomartin" alt="" />
      </div>

      <p style={{ color: "red" }}>
        *Open this page in new window and press the button.
      </p>
      <button id="print" onClick={printPDF}>
        PRINT
      </button>
    </div>
  );
};

export default Design;
