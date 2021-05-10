import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty } from "../../Helpers/processdata";
import { ModalStyle, CardStyle } from "../../Helpers/styles";

export default class StatusDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={ModalStyle}
        >
          <span stlye={{ display: "inline - block"}}>
            <b>Status:</b> {handleEmpty(this.props.data.state)}{" "}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={CardStyle}>
            <p>Reason: {handleEmpty(this.props.data.reason)} </p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
