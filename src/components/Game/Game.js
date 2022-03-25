import React from "react";
import Navigation from "./Navigation-bar";
import Post from "./Post/Post";
import styles from "./game.module.scss";
const Game = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <section className={styles.section}>
          <Post />
        </section>
      </main>
    </div>
  );
};
export default Game;
