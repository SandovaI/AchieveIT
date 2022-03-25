import classes from "./upload.module.scss";

import React, { Component, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

//Components
import Navigation from "../Navigation-bar";
import Dropzone from "./Dropzone";
const UploadFile = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main className={classes.main}>
        <section className={classes.section}>
          <div className={classes.div}>
            <Dropzone />
          </div>
        </section>
      </main>
    </div>
  );
};

export default UploadFile;
