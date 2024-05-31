import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import "./resumeDownload.css";
import ResumeImage from "./../assets/resume.webp";
import ResumePDF from "./../assets/resume.pdf";

function download() {
  const download = (
    <div className="download-area">
      <img src={ResumeImage} alt="resume-image" />

      <button className="download-button">
        <a href={ResumeImage} download="resume.webp">
          Download Resume
        </a>
      </button>
    </div>
  );
  return download;
}

export default download;
