import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default class LoadingModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scanning for devices..</Modal.Title>
        </Modal.Header>
        <Modal.Body stlye={{ disply: "flex", justifyContent: "center" }}>
          <div>
            <Spinner animation="border" size="xl" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
