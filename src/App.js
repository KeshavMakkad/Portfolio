import "./styles.css";
import Home from "./Portfolio/Home/home.js";
import AboutMe from "./Portfolio/AboutMe/about.js";
import Resume from "./Portfolio/Resume/resume.js"

export default function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
    </div>
  );
}
