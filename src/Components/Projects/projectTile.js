import "./projectTile.css";

function tile({ img, header, text, linkGithub, linkDemo }) {
  const tile = (
    <div className="project-tile">
      <div className="project-text-container">
        <img className="project-img" src={img} alt="project" />
        <h1 className="project-heading">{header}</h1>
        <p className="project-description">{text}</p>
        <div className="links-container">
          <button onClick={() => window.open(linkGithub, "_blank")}>
            Github
          </button>
          <button onClick={() => window.open(linkDemo, "_blank")}>Demo</button>
        </div>
      </div>
    </div>
  );

  return tile;
}
export default tile;
