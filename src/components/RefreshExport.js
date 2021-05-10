import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { redirect } from "../Helpers/requests";

export default class RefreshExport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button
          variant="secondary"
          onClick={() =>
            redirect(
              this.props.history,
              this.props.params.address,
              this.props.params.mask
            )
          }
        >
          Refresh
        </Button>
        <Button variant="secondary">Export</Button>
      </ButtonGroup>
    );
  }
}
