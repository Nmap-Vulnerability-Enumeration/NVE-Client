import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, doesExist } from "../Helpers/processdata";
import { H1Style } from "../Helpers/styles";
import IpDetails from "./IpDetails";
import OsDetails from "./OsDetails";
import PortDetails from "./PortDetails"

export default class DetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vulnerabilities: [],
    };
  }

  getVulnerabilities = async () => {
    await fetch("/api/v1/device?discovery_ip=" + this.props.data.ip.discovery)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ vulnerabilities: res });
      });
  };

  render() {
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={this.props.close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Details for IP {handleEmpty(this.props.data.ip, "discovery")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col>
                <p> Hostname: {handleEmpty(this.props.data.hostname)}</p>
              </Col>
              <Col>
                <IpDetails data={this.props.data} />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>MAC Address: {handleEmpty(this.props.data.mac)}</p>
              </Col>
              <Col>
                <OsDetails data={this.props.data.os}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <PortDetails data={this.props.data.ports}/>
              </Col>
              <Col>
                <OsDetails data={this.props.data.os}/>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}
