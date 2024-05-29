import Brief from "./brief.js";
import "./home.css";
import HomeMain from "./HomeMain.js";
import Navbar from "./../navbar.js";
import Footer from "./../footer.js";

function home() {
  const home = (
    <body>
      <Navbar />
      <div class="main-display-container">
        <HomeMain />
        <Brief />
      </div>
      <Footer />
    </body>
  );

  return home;
}

export default home;
