import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty } from "../Helpers/processdata";

export default class IpDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          IP address:
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={{marginLeft: 20}}>
            <p>Discovery IP: {handleEmpty(this.props.data.ip, "discovery")}</p>
            <p>Ipv4: {handleEmpty(this.props.data.ip, "ipv4")}</p>
            <p>ipv6: {handleEmpty(this.props.data.ip, "ipv6")}</p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
