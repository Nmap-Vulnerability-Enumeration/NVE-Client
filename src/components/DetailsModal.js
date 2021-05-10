import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default class DetailsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={() => console.log("hide")}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    );
  }
}
