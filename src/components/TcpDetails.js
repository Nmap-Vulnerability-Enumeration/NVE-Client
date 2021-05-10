import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../Helpers/processdata";

export default class TcpDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (block) => {
    console.log(block);
    return (
      <Card>
        <p> State: {handleEmpty(block.state)}</p>
        <p> Protocol: {handleEmpty(block.proto)}</p>
        <p> Port ID: {handleEmpty(block.portid)}</p>
      </Card>
    );
  };

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Ports: ({this.props.data.filter((port) => port.state === "open").length} open)
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
