import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default class FilterOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary" onClick={() => this.props.changeFilter("all")}>
          All
        </Button>
        <Button variant="secondary" onClick={() => this.props.changeFilter("os")}>
          OS
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.props.changeFilter("services")}
        >
          Services
        </Button>
      </ButtonGroup>
    );
  }
}
