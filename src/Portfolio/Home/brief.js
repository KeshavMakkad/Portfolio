import "./brief.css";

function brief() {
  const brief = (
    <div class="brief-container">
      <div className="text-container">
        <h1>
          <span class="color-1">Brief</span>
          <span class="color-2"> Introduction</span>
        </h1>
        <p>
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
      <img
        src="https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png"
        class="brief-image"
        alt="Java Logo"
      />
    </div>
  );

  return brief;
}

export default brief;
