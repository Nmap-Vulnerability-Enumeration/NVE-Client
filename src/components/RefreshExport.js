import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { redirect } from "../Helpers/requests";

export default class RefreshExport extends Component {
  constructor(props) {
    super(props);
    this.state = { downloadLink: "", showModal: false };
  }
  handleClose = () => {
    this.setState({ showModal: false });
  };

  makeTextFile = () => {
    const data = new Blob([JSON.stringify(this.props.data)], {
      type: "text/plain",
    });

    console.log([JSON.stringify(this.props.data)])
    // this part avoids memory leaks
    if (this.state.downloadLink !== "")
      window.URL.revokeObjectURL(this.state.downloadLink);

    // update the download link state
    this.setState({
      downloadLink: window.URL.createObjectURL(data),
      showModal: true,
    });
    console.log(this.state.downloadLink);
  };

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body
            stlye={{ disply: "flex", justifyContent: "center" }}
          >

            Are you sure you want to export this data?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              target="_blank"
              download="data.txt"
              href={this.state.downloadLink}
              onClick={this.handleClose}
            >
              Confirm
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <ButtonGroup aria-label="Basic example" size="lg">
          <Button
            variant="secondary"
            onClick={() =>
              redirect(
                this.props.history,
                this.props.params.address,
                this.props.params.mask
              )
            }
          >
            Refresh
          </Button>
          <Button variant="secondary" onClick={this.makeTextFile}>
            Export
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
