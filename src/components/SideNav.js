import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav  variant="tabs" defaultActiveKey="/home" className="flex-column">
        <Button variant="secondary" size ="lg">
          All
        </Button>
        <br/>
        <Button variant="secondary" size ="lg">
            OS
        </Button>
        <br/>
        <Button variant="secondary" size ="lg">
          Services
        </Button>
      </Nav>
    );
  }
}
