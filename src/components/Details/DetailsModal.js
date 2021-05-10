import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { handleEmpty } from "../../Helpers/processdata";
import IpDetails from "./IpDetails";
import OsDetails from "./OsDetails";
import PortDetails from "./PortDetails";
import ServiceDetails from "./ServiceDetails";
import StatusDetails from "./StatusDetails";
import Vulnerabilities from "./Vulnerabilities";

export default class DetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vulnerabilities: [],
    };
  }

  render() {
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={this.props.close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#343a40", color: "#f8f9fa" }}
        >
          <Modal.Title id="example-modal-sizes-title-lg">
            Details for IP {handleEmpty(this.props.data.ip, "discovery")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#212529", color: "#f8f9fa" }}>
          <Container fluid>
            <Row>
              <Col>
                <span stlye={{ display: "inline - block" }}>
                  {" "}
                  <b> Hostname:</b> {handleEmpty(this.props.data.hostname)}{" "}
                </span>
              </Col>
              <Col>
                <IpDetails data={this.props.data} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <span stlye={{ display: "inline - block" }}>
                  <b>MAC Address:</b> {handleEmpty(this.props.data.mac)}
                </span>
              </Col>
              <Col>
                <OsDetails data={this.props.data.os} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <PortDetails data={this.props.data.ports} />
              </Col>
              <Col>
                <ServiceDetails data={this.props.data.tcp} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <span stlye={{ display: "inline - block" }}>
                  <b> Uptime:</b> {handleEmpty(this.props.data.uptime)}
                </span>
              </Col>
              <Col>
                <StatusDetails data={this.props.data.status} />
              </Col>
            </Row>
            <br />
            <Row>
              <Vulnerabilities data={this.props.data} />
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}
