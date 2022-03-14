import React from "react";
import styles from "./upload.module.scss";
import Navigation from "../Navigation-bar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadFile from "./uploadfile";
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
                <Form className={styles.formItem}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Caption</Form.Label>
                  </Form.Group>
                </Form>
                <Form.Control className={styles.formItem} type="password" />

                <Form.Select
                  className={styles.formItem}
                  aria-label="Default select example"
                >
                  <option>Select Challenge</option>
                  <option value="1">Cold Bath</option>
                  <option value="2">20 push ups</option>
                  <option value="3">10 pull ups</option>
                </Form.Select>
                <button>Post</button>
              </div>
            </div>
          </div>
          <UploadFile />
        </section>
      </main>
    </body>
  );
};

export default Upload;
