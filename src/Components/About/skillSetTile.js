import "./skillSetTile.css";

function skillSetTab(imageURL) {
  const skillSetTab = (
    <div className="skill-set-tab">
      <img className="skill-set-img" src={imageURL} />
    </div>
  );
  return skillSetTab;
}

export default skillSetTab;
