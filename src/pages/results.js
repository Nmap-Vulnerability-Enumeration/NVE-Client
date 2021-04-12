import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Collapse } from "bootstrap";

export default class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <h1>Nmap Vulnerability Emumerator</h1>
        </Row>
        <Row>
          <Col sm={2}>
            <h2> Devices</h2>
          </Col>
          <Col sm={8}>
            <h2> Discovered Vulnerabilties</h2>
          </Col>
          <Col>
            <Row>
              <Col>
                <Alert.Link>Refresh </Alert.Link>
                <Alert.Link>    Export</Alert.Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Hostname</th>
              <th>IP</th>
              <th>OS</th>
              <th>Status</th>
              <th>Num Open Ports</th>
              <th>Num of Services</th>
              <th>Up-time</th>
              <th>Vendor</th>
              <th>Num of Vulnerabilties</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    );
  }
}
//               {/* <hr style={{width: '10px', height: '20px', display: 'inline-block'}}/> */ }