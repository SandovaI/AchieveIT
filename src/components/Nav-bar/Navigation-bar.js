import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navigation() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/RoadMap">Roadmap</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Navigation;
