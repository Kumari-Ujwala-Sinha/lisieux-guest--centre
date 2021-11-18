import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavbarLinks";
import "./navbarstyle.css";
// import TextAnim from "./TextAnim";

export default function Navbar() {
  

  return (
    <div className="navbar">
      <div className="navContainer">
          <div className="navLogoWrapper">
              <div className="nav__logo">
                <Link to="/">
                  <h2 className="nav__logo__head">LISIEUX GUEST CENTRE</h2>
                </Link>
              </div>
          </div>
        <div className="navLinksWrapper" id="">
          <NavLinks />
        </div>
        {/* <div
          className="navChange"
          id="nav_parent"
          onClick={handleClick}
        >
          <div id="div1"></div>
          <div id="div2"></div>
          <div id="div3"></div>
        </div> */}
      </div>
      {/* <div
        className="hidden"
        id="drop-down"
      >
        <NavLinks colorChange={colorChange} />
      </div> */}
    </div>
  );
}
