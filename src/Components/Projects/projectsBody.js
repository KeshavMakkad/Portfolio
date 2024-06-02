import ProjectTile from "./projectTile.js";

export default function Projects() {
  const projects = (
    <div className="projects-container">
      <ProjectTile
        header="Project 1"
        text="Hey, this is my first project"
        LinkGithub="https://github.com/KeshavMakkad/Sudoku"
        linkDemo="https://sudoku-h14kggnmi-keshav-makkads-projects.vercel.app/"
      />
    </div>
  );

  return projects;
}
