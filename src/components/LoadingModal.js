import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class LoadingModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleClose}
        centered
      >
        <Modal.Body>
          <Container>
            <Row>
              <br />
            </Row>
            <Row>
              <br />
            </Row>
            <Row>
              <Spinner
                animation="border"
                size="lg"
                style={{ margin: 0, padding: 0 }}
              />
              <div style={{ width: 20 }}></div>
              <Modal.Title>Scanning for devices ...</Modal.Title>
            </Row>
            <Row>
              <Col md={9}>{""}</Col>
              <Col>
                <Button variant="primary" onClick={this.props.handleClose}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

/* <Modal.Header closeButton></Modal.Header>
<Modal.Footer></Modal.Footer>
*/
