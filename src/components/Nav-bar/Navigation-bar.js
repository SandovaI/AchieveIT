import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";

function Navigation() {
  return (
    <header>
      <nav>
        <ul className={styles.navi}>
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
      </nav>
    </header>
  );
}
export default Navigation;
