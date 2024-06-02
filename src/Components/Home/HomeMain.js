import "./homeMain.css";

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
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/full-stack-web-developer-4549256-3766897.png"
          alt="Dev pic"
          class="dev-pic"
        />
      </div>
    </div>
  );
  return homeMain;
}

export default homeMain;
