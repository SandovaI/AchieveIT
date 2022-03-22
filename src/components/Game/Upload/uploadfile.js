import styles from "./upload.module.scss";

import React, { Component, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

//Components
import Navigation from "../Navigation-bar";
import Dropzone from "./Dropzone";
import Post from "../Post/Post";
const UploadFile = () => {
  return (
    <body>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.div}>
            <Container>
              <Row>
                <h1>Upload Video</h1>
                <p>Post a video for a challenge</p>
              </Row>
              <Row>
                <Col md={3}>
                  <Dropzone />
                </Col>
                <Col md={9}></Col>
              </Row>

              <Post />
            </Container>
          </div>
        </section>
      </main>
    </body>
  );
};

export default UploadFile;
