import "./selfDescription.css";

function selfDescription() {
  const description = (
    <div className="description-container">
      <div className="desctiprion-text-container">
        <h1 className="description-heading">
          Get to <span className="color-2">know</span> me
        </h1>
        <p class="description-text">
          Hi, my name is <span class="color-2">Keshav Makkad</span> and I am
          from Telangana, India. I'm a <span class="color-2">full stack </span>
          developer and a first year college student pursuing a BSc in CSE.
          <br />
          <br />I am proficient in{" "}
          <span class="color-2">Java, HTML, CSS and JavaScript</span>, with some
          knowledge of C++. I am a competitive coding enthusiast and enjoy
          taking on challenging projects. I love creating projects for fun,
          which you can check out in the projects section. I am currently
          working on projects in the <span class="color-2">MERN stack</span> and
          am always open to new collaborations or work where I can contribute
          and grow. Feel free to connect with me; links are in the footer.
          <br />
          <br />
          Apart from coding, I love playing{" "}
          <span class="color-2">football and cricket</span>, capturing moments
          as a <span class="color-2">videography</span>, and indulging in{" "}
          <span class="color-2">video editing and photography</span>. I am also
          a cooking enthusiast. And of course, I love Chai! Check out some of my
          shots on{" "}
          <a href="https://www.instagram.com/keshav_photo_/">
            <span className="color-2">Instagram</span>
          </a>
          .
        </p>
      </div>
    </div>
  );

  return description;
}

export default selfDescription;
