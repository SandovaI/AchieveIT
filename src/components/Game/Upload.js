import React from "react";
import styles from "./upload.module.scss";
import Navigation from "./Navigation-bar";
import Form from "react-bootstrap/Form";
const Upload = () => {
  return (
    <body>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.div}>
            <h1>Upload Video</h1>
            <p>Post a video for a challenge</p>
            <div className={styles.content}>
              <div className={styles.upload}>
                <h3>Select a video to upload</h3>
                <button>Select file</button>
              </div>
              <div className={styles.form}>
                <h3>Caption</h3>
                <input type="text"></input>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Upload;
