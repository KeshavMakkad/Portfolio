import React from "react";
import ProjectTile from "./projectTile";
import "./projectsbody.css";
import project1Image from "./../../assets/Projects/sudoku.png";
import project2Image from "./../../assets/Projects/course-registration.jpg";
import project3Image from "./../../assets/Projects/sudoku.png";

export default function Projects() {
  return (
    <div className="projects-body">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-container">
        <ProjectTile
          img={project1Image}
          header="Project 1"
          text="Hey, this is my first project"
          linkGithub="https://github.com/KeshavMakkad/Sudoku"
          linkDemo="https://sudoku-h14kggnmi-keshav-makkads-projects.vercel.app/"
        />
        <ProjectTile
          img={project2Image}
          header="Project 2"
          text="This is my second project"
          linkGithub="https://github.com/KeshavMakkad/Project2"
          linkDemo="https://project2-vercel-app.vercel.app/"
        />
        <ProjectTile
          img={project3Image}
          header="Project 3"
          text="This is my third project"
          linkGithub="https://github.com/KeshavMakkad/Project3"
          linkDemo="https://project3-vercel-app.vercel.app/"
        />
      </div>
    </div>
  );
}
