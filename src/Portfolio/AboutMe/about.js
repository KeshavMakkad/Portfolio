import Navbar from "../navbar.js";
import Footer from "../footer.js";
import SelfDescription from "./selfDescription.js";
import SkillSet from "./skillSet.js";

function aboutMe() {
  const aboutMe = (
    <div id="about" class="about-me-containr">
      <Navbar />
      <SelfDescription />
      <SkillSet />
      <Footer />
    </div>
  );

  return aboutMe;
}

export default aboutMe;
