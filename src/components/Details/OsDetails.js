import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../../Helpers/processdata";
import { ModalStyle, CardStyle } from "../../Helpers/styles";

export default class OsDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (block) => {
    return (
      <Card style={CardStyle}>
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
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          style={ModalStyle}
        >
          <span stlye={{ display: "inline - block"}}>
            <b>Operating System:</b> {handleEmpty(this.props.data, "name")}
          </span>
          
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            {this.props.data != null
              ? dropNA(this.props.data.osclass).map((block) =>
                  this.renderDetails(block)
                )
              : [].map((block) => this.renderDetails(block))}
          </div>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
