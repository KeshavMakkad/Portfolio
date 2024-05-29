import Navbar from "./../navbar.js";
import Footer from "./../footer.js";
import SelfDescription from "./selfDescription.js";

function aboutMe() {
  const aboutMe = (
    <div class="about-me-containr">
      <Navbar />
      <SelfDescription />
      <Footer />
    </div>
  );

  return aboutMe;
}

export default aboutMe;
