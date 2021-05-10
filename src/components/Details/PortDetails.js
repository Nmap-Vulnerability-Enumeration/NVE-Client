import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../../Helpers/processdata";
import { ModalStyle, CardStyle } from "../../Helpers/styles";

export default class PortDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (block) => {
    return (
      <Accordion defaultActiveKey="2" style={{ marginLeft: 20 }}>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={ModalStyle}
        >
          Port ID: {handleEmpty(block.portid)}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={CardStyle}>
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
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={ModalStyle}
        >
          <span stlye={{ display: "inline - block" }}>
            <b> Ports: </b> (
            {this.props.data.filter((port) => port.state === "open").length}{" "}
            open)
          </span>
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
