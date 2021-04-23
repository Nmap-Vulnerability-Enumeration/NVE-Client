import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class TableAll extends Component {
  constructor(props) {
    super(props);
    this.row = this.row.bind(this)
  }

  row = (key) => {
    let block = this.props.data[key].value;
    return React.createElement(() => (
      <tr>
        <td>{block.hostname}</td>
        <td>{block.ip.discovery}</td>
        <td>{block.os == null ? "NA": block.os.name}</td>
        <td>{block.status.state}</td>
        <td>{block.ports.filter(port =>port.state == "open").length}</td>
        <td>{"NA"}</td>
        <td>{"NA"}</td>
        <td>{block.vendor == null ? "NA": block.vendor}</td>
        <td>{block.vulns == null ? "NA": block.vulns}</td>
      </tr>
    ));
  };

  render() {
    return (
      <Table striped bordered hover variant="dark"  responsive>
        <thead>
          <tr>
            <th>Hostname</th>
            <th>IP</th>
            <th>OS</th>
            <th>Status</th>
            <th>Num Open Ports</th>
            <th>Num of Services</th>
            <th>Up-time</th>
            <th>Vendor</th>
            <th>Num of Vulnerabilties</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.data).map((key, index) => this.row(key))}
        </tbody>
      </Table>
    );
  }
}
