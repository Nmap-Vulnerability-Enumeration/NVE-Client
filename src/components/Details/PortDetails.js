import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../../Helpers/processdata";

export default class PortDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (block) => {
    return (
      <Accordion defaultActiveKey="2" style={{ marginLeft: 20 }}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Port ID: {handleEmpty(block.portid)}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={{ marginLeft: 20 }}>
            <p> State: {handleEmpty(block.state)}</p>
            <p> Protocol: {handleEmpty(block.proto)}</p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    );
  };

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Ports: (
          {this.props.data.filter((port) => port.state === "open").length} open)
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            {dropNA(this.props.data).map((block) => this.renderDetails(block))}
          </div>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
