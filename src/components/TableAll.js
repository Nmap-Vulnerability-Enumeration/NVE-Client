import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { handleEmpty, secondsToDhms } from "../Helpers/processdata";
import CustomButton from "./CustomButton";


export default class TableAll extends Component {
  constructor(props) {
    super(props);
  }

  renderRow = (key) => {
    let block = this.props.data[key].value;
    return React.createElement(() => (
      <tr>
        <td>{handleEmpty(block.hostname)}</td>
        <td>{handleEmpty(block.ip, "discovery")}</td>
        <td>{handleEmpty(block.os, "name")}</td>
        <td>{handleEmpty(block.status, "state")}</td>
        <td>{block.ports.filter((port) => port.state === "open").length}</td>
        <td>{secondsToDhms(handleEmpty(block.uptime))}</td>
        <td>{handleEmpty(block.vendor, false, true)}</td>
        <td>
          <CustomButton getDetails={this.props.showDetails} ipAddress={block.ip.discovery}/>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Hostname</th>
            <th>IP</th>
            <th>OS</th>
            <th>Status</th>
            <th>Num of Services</th>
            <th>Up-time</th>
            <th>Vendor</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.data).map((key, index) =>
            this.renderRow(key)
          )}
        </tbody>
      </Table>
    );
  }
}
