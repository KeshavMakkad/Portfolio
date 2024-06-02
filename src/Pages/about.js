import Navbar from "./../Components/Common/navbar.js";
import Footer from "./../Components/Common/footer.js";
import SelfDescription from "./../Components/About/selfDescription.js";
import SkillSet from "./../Components/About/skillSet.js";

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
