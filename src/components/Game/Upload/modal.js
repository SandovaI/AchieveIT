import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your video is being uploaded!
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <NavLink to="/home">
          <Button variant="warning" onClick={props.onHide}>
            Continue
          </Button>
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
