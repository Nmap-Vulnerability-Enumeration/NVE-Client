import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty } from "../Helpers/processdata";
import { H1Style } from "../Helpers/styles";
import IpDetails from "./IpDetails";

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
        console.log(res[0].value);
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
                <p> Hostname: {handleEmpty(this.props.data.mac)}</p>
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
                <Accordion defaultActiveKey="2">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                   OS: {handleEmpty(this.props.data.os, "name")}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card>
                      <p>
                        Discovery IP:{" "}
                        {handleEmpty(this.props.data.ip, "discovery")}
                      </p>
                      <p>Ipv4: {handleEmpty(this.props.data.ip, "ipv4")}</p>
                      <p>ipv6: {handleEmpty(this.props.data.ip, "ipv6")}</p>
                    </Card>
                  </Accordion.Collapse>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}
