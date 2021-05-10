import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty } from "../Helpers/processdata";

export default class StatusDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Status: {this.props.data.state}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={{marginLeft: 20}}>
            <p>Reason: {this.props.data.reason} </p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
