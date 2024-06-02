import ProjectTile from "./projectTile.js";
import "./projectsbody.css";

export default function Projects() {
  const projects = (
    <div className="projects-body">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-container">
        <ProjectTile
          header="Project 1"
          text="Hey, this is my first project"
          LinkGithub="https://github.com/KeshavMakkad/Sudoku"
          linkDemo="https://sudoku-h14kggnmi-keshav-makkads-projects.vercel.app/"
        />
        <ProjectTile
          header="Project 2"
          text="This is my second project"
          LinkGithub="https://github.com/KeshavMakkad/Project2"
          linkDemo="https://project2-vercel-app.vercel.app/"
        />

        <ProjectTile
          header="Project 3"
          text="This is my third project"
          LinkGithub="https://github.com/KeshavMakkad/Project3"
          linkDemo="https://project3-vercel-app.vercel.app/"
        />
      </div>
    </div>
  );

  return projects;
}
