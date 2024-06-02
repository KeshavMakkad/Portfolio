import ProjectsBody from "./../Components/Projects/projectsBody.js";
import Navbar from "./../Components/Common/navbar.js";
import Footer from "./../Components/Common/footer.js";

export default function projects() {
  const projects = (
    <div>
      <Navbar />
      <ProjectsBody />
      <Footer />
    </div>
  );

  return projects;
}
