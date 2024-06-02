import "./resumeDownload.css";
import ResumeImage from "./../../assets/resume.webp";

function download() {
  const download = (
    <div className="download-area">
      <img src={ResumeImage} alt="resume-image" className="resume-img" />

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
