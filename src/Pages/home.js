import Brief from "../Components/Home/brief.js";
import "./home.css";
import HomeMain from "../Components/Home/HomeMain.js";
import Navbar from "../Components/Common/navbar.js";
import Footer from "../Components/Common/footer.js";
import Projects from "./projects.js";

function home() {
  const home = (
    <body>
      <Navbar />
      <div class="main-display-container">
        <HomeMain />
        <Brief />
        <Projects />
      </div>
      <Footer />
    </body>
  );

  return home;
}

export default home;
