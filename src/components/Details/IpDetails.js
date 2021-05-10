import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty } from "../../Helpers/processdata";
import { ModalStyle, CardStyle } from "../../Helpers/styles";

export default class IpDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion defaultActiveKey="2" style={ModalStyle}>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={ModalStyle}
        >
          <span style={{ display: "inline - block" }}>
            <b>IP address:</b>
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={CardStyle}>
            <p>Discovery IP: {handleEmpty(this.props.data.ip, "discovery")}</p>
            <p>Ipv4: {handleEmpty(this.props.data.ip, "ipv4")}</p>
            <p>ipv6: {handleEmpty(this.props.data.ip, "ipv6")}</p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
