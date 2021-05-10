import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { handleEmpty, dropNA } from "../../Helpers/processdata";

export default class ServiceDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails = (key) => {
    let block = this.props.data[key];
    console.log(block);
    return (
      <div>
      <Accordion defaultActiveKey="3" style={{marginLeft: 20}}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {key}: {block.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card style={{marginLeft: 20}}>
            <p> State: {handleEmpty(block.state)}</p>
            <p> Reason: {handleEmpty(block.reason)}</p>
            <p> Product: {handleEmpty(block.product)}</p>
            <p> Version: {handleEmpty(block.version)}</p>
            <p> Conf: {handleEmpty(block.conf)}</p>
            <p> CPE: {handleEmpty(block.cpe)}</p>
          </Card>
        </Accordion.Collapse>
      </Accordion>
      <br/>
      </div>
    );
  };

  render() {
    return (
      <Accordion defaultActiveKey="2">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Services: ({Object.keys(this.props.data).length} detected)
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            {Object.keys(this.props.data).map((key, index) =>
              this.renderDetails(key)
            )}
          </div>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
