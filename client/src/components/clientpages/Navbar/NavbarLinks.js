import React from "react";
import { NavLink } from "react-router-dom";
import './navbarstyle.css';
import Header from "../../headers/Header";
function NavLinks({ colorchange }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
          >

              Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/rooms"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
          >Rooms
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/services"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
          >
              Services
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/about"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
            onClick={scrollToTop}
          >
              About Us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/blog"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
            onClick={scrollToTop}
          >
              Blog
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/contact"
            activeClassName=""
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa726",
            }}
          >
              Contact
          </NavLink>
        </li>
          
          <Header />
      
      </ul>
  );
}

export default NavLinks;
