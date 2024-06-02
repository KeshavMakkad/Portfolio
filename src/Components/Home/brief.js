import "./brief.css";
import TEA from "./../../assets/coffee-morning.gif";

function brief() {
  const brief = (
    <div class="brief-container">
      <div className="text-container">
        <h1 className="brief-heading">
          <span class="color-1">Brief</span>
          <span class="color-2"> Introduction</span>
        </h1>
        <p className="brief-text">
          I am a <span class="color-2">full stack developer</span> currently
          studying, proficient in{" "}
          <span class="color-2">Java, HTML, CSS, and JavaScript</span>, with
          some knowledge of <span class="color-2">C++</span>. I am a competitive
          coding enthusiast and am currently working on projects in the{" "}
          <span class="color-2">MERN stack</span>.
          <br />
          <br />I love playing <span class="color-2">
            football, cricket
          </span>{" "}
          and love <span class="color-2">photography</span>. I am also a cooking
          enthusiast.
          <br />
          <br />
          And of course, I love <span class="color-2">Chai</span>!
        </p>
      </div>
      <img src={TEA} class="brief-image" alt="Java Logo" />
    </div>
  );

  return brief;
}

export default brief;
