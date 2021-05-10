import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand>
          <h1>Nmap Vulnerability Emumerator</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
