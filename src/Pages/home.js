import Brief from "../Components/Home/brief.js";
import "./home.css";
import HomeMain from "../Components/Home/HomeMain.js";
import Navbar from "../Components/Common/navbar.js";
import Footer from "../Components/Common/footer.js";

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
