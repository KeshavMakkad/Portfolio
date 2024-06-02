import Navbar from "../Components/Common/navbar.js";
import Footer from "../Components/Common/footer.js";
import Download from "../Components/Resume/resumeDownload.js";

function resume() {
  const resume = (
    <div className="resume-container">
      <Navbar />
      <Download />
      <Footer />
    </div>
  );
  return resume;
}

export default resume;
