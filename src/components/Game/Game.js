import React from "react";
import Navigation from "./Navigation-bar";
import Post from "./Post/Post";
import styles from "./game.module.scss";
const Game = () => {
  return (
    <body>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <section className={styles.section}>
          <Post />
        </section>
      </main>
    </body>
  );
};
export default Game;
