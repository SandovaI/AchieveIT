import React from "react";
import styles from "./challenges.module.scss";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation-bar";
function Challenges() {
  return (
    <div>
      <Navigation />
      <section>
        <h1 className={styles.title}>Challenges</h1>
        <NavLink to="/upload">
          <button>coldbath</button>
        </NavLink>
      </section>
    </div>
  );
}
export default Challenges;
