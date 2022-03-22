import styles from "./upload.module.scss";

import React, { Component, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

//Components
import Navigation from "../Navigation-bar";
import Dropzone from "./Dropzone";
const UploadFile = () => {
  return (
    <body>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.div}>
            <Dropzone />
          </div>
        </section>
      </main>
    </body>
  );
};

export default UploadFile;
