import "./homeMain.css";
import GIF from "./../../assets/giphy.webp";

function homeMain() {
  const homeMain = (
    <div class="container">
      <div class="main-home-text">
        <h1>Hi There!</h1>
        <h2>
          I'm <span class="name">KESHAV MAKKAD</span>
        </h2>
        <h3>Full Stack Developer</h3>
      </div>
      <div class="image-home">
        <img src={GIF} alt="Dev pic" class="dev-pic" />
      </div>
    </div>
  );
  return homeMain;
}

export default homeMain;
