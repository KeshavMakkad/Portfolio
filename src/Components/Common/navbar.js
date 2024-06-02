import React from "react";
import "./navbar.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

function navbar() {
  const navbar = (
    <nav className="nav-bar">
      <h1 className="logo-header">
        <img
          src="https://www.google.com/search?sca_esv=f0b39c056d6199a4&sca_upv=1&rlz=1C1CHBF_enIN1090IN1090&sxsrf=ADLYWIIwxSNzH6T4eV2pjmxWsh5y-zWAsw:1716466028815&q=images&uds=ADvngMhybE7Ks85Q6-fLHl8MoJ1TIzWBPSukbaRRIBQLfWtrR9DA1Wx8jd83Yw57Hhs1IWmJqy-Eh8HpKCR8YUFm5ljHF9zXIAkxYkt10bD3531orDII9CiveOzPeWzpnj3J75CY7p0CNkK-IvZoqS0JSOaghz8myExnnk46R1smJunlWcH-clzo6sO8puKdXIsd-bqsBsMtPPkJjqflkVsyH950UqwdOysfVXDmZHQfj-QWpWa6SmbgBrC9JLNnJ8NyrJJArP5mJIjYeCXcDzYa4Rb74v-HugCrvHt52xHWsVnA6XpgFIM&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi_laqf3qOGAxXWzDgGHWf0DZ0QtKgLegQIEhAB&biw=2133&bih=1021&dpr=0.9#vhid=tYmxDgFq4MrkJM&vssid=mosaic"
          alt="Logo"
        />
      </h1>
      <div className="nav-links-container">
        <a href="/" className="link-container">
          <span className="material-symbols-outlined link-element">home</span>
          <span className="link-element">Home</span>
        </a>
        <a href="/about" className="link-container">
          <span className="material-symbols-outlined link-element">person</span>
          <span className="link-element">About Me</span>
        </a>
        <a href="/projects" className="link-container">
          <span className="material-symbols-outlined link-element">
            laptop_mac
          </span>
          <span className="link-element">Projects</span>
        </a>
        <a href="/resume" className="link-container">
          <span className="material-symbols-outlined link-element">
            article
          </span>
          <span className="link-element">Resume</span>
        </a>
      </div>
    </nav>
  );

  return navbar;
}

export default navbar;
