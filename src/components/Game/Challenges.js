import React from "react";
import styles from "./challenges.module.scss";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation-bar";
import { Container, Row, Col } from "react-bootstrap";

function Challenges() {
  return (
    <div>
      <Navigation />
      <main className={styles.main}>
        <Container className={styles.container}>
          <h1 className={styles.title}>Daily Challenges</h1>
          <Row className={styles.row}>
            <NavLink to="/upload">
              <button className={styles.button}>Ice Bath</button>
            </NavLink>
          </Row>
          <Row className={styles.row}>
            <NavLink to="/upload">
              <button className={styles.button}>Mile Run</button>
            </NavLink>
          </Row>

          <Row className={styles.row}>
            <NavLink to="/upload">
              <button className={styles.button}>25 Pushups</button>
            </NavLink>
          </Row>
        </Container>
      </main>
    </div>
  );
}
export default Challenges;
