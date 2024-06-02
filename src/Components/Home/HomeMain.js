import React from "react";
import "./homeMain.css";
import GIF from "./../../assets/giphy.webp";
import Typing from "./../Common/typing.js";

function HomeMain() {
  const homeMain = (
    <div className="container">
      <div className="main-home-text">
        <h1>Hi There!</h1>
        <h2>
          I'm <span className="name">KESHAV MAKKAD</span>
        </h2>
        <h3>
          <Typing
            text={[
              "Full Stack Developer",
              "Tech Enthusiast",
              "Lifelong Learner",
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
          />
        </h3>
      </div>
      <div className="image-home">
        <img src={GIF} alt="Dev pic" className="dev-pic" />
      </div>
    </div>
  );
  return homeMain;
}

export default HomeMain;
