import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../Helpers/processdata";

export default class OsDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (block) => {
    return (
      <Card style={{marginLeft: 20}}>
        <p> Type: {handleEmpty(block.type)}</p>
        <p>vendor: {handleEmpty(block.vendor)}</p>
        <p>Os Family: {handleEmpty(block.osfamily)}</p>
        <p>Os Generation: {handleEmpty(block.osgen)}</p>
        <p>CPE: {handleEmpty(block.cpe[0])}</p>
      </Card>
    );
  };

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Operation System: {handleEmpty(this.props.data, "name")}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <div> 
          {dropNA(this.props.data.osclass).map(block => this.renderDetails(block))}
          </div>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
