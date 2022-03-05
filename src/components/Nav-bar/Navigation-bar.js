import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "../../logo.svg";
function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}>
        <NavLink to="/">
          <img className={styles.headerLogoIcon} src={logo} alt=""></img>
        </NavLink>
        <h1 className={styles.headerLogoText}>Stay Hard</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navitems}>
          <li className={styles.navitem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/About">About</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/RoadMap">Roadmap</NavLink>
          </li>
          <li className={styles.navitem}>
            <button>Start</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
