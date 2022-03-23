import React, { useCallback, useState, useRef } from "react";
import styles from "./dropzone.module.scss";

import { useDropzone } from "react-dropzone";
import { db, storage } from "../../../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post/Post";
import MyVerticallyCenteredModal from "./modal";
const Dropzone = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const captionRef = useRef(null);
  const challengeRef = useRef(null);
  const [description, setDescription] = useState("Select a video to upload");
  const [modalShow, setModalShow] = React.useState(false);

  const uploadPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      challenge: challengeRef.current.value,
      timestamp: serverTimestamp(),
    });
    await Promise.all(
      selectedImages.map((image) => {
        const imageRef = ref(storage, `posts/${docRef.id}/${image.path}`);
        uploadBytes(imageRef, image, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            images: arrayUnion(downloadURL),
          });
        });
      })
    );
    captionRef.current.value = "";
    setDescription("");
    setSelectedImages([]);
    modal();
  };
  const modal = () => {
    setModalShow(true);
  };
  console.log("db", db);
  console.log("storage", storage);
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const selected_images = selectedImages?.map((file) => (
    <div>
      {/* <img src={file.preview} styles={{ width: "100px" }} alt="" /> */}
      <video className={styles.video} width="259px" height="486px" controls>
        <source src={file.preview} />
      </video>
    </div>
  ));
  return (
    <Container>
      <Row className={styles.title}>
        <h1>Upload Video</h1>
        <p>Post a video for a challenge</p>
      </Row>
      <Row>
        <Col md={5}>
          <div className={styles.uploadCard} {...getRootProps()}>
            <input {...getInputProps()} />
            <h5>{description}</h5>
            <p>Or drag and drop a file</p>
            <Button
              className={styles.button}
              onClick={uploadPost}
              variant="warning"
            >
              Select File
            </Button>
          </div>
        </Col>
        <Col md={7} className={styles.col}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Caption</Form.Label>
            <Form.Control type="email" ref={captionRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Challenge</Form.Label>
            <Form.Select ref={challengeRef}>
              <option>Ice Bath</option>
              <option>Mile Run</option>
              <option>25 Pushups</option>
            </Form.Select>
          </Form.Group>

          <Button
            className={styles.button}
            onClick={uploadPost}
            variant="warning"
          >
            Post
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>

      <h1>Preview</h1>
      {selected_images}
    </Container>
  );
};
export default Dropzone;
