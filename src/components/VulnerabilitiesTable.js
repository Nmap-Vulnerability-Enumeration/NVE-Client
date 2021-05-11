import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { handleEmpty, getNumPages} from "../Helpers/processdata";
import CustomButton from "./CustomButton";

export default class VulnerabilitiesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      active: 0,
      start: 0,
      end: 10,
    };
  }
  renderRow = (key) => {
    let block = this.props.data[key].value;
    return React.createElement(() => (
      <tr>
        <td>{handleEmpty(key)}</td>
        <td>{handleEmpty(block.impact.baseMetricV2, "severity")}</td>
        <td>{handleEmpty(block.impact.baseMetricV2, "impactScore")}</td>
        <td>{handleEmpty(block.impact.baseMetricV2, "exploitabilityScore")}</td>
        <td>{handleEmpty(block.impact.patched)}</td>
      </tr>
    ));
  };

  getStart = (index) => {
    return Number(index) * 10 - 10;
  };

  getEnd = (index) => {
    return Number(index) * 10;
  };

  changePage = (page) => {
    this.setState({
      active: page,
      start: this.getStart(page),
      end: this.getEnd(page),
    });
  };

  
  componentDidMount() {
    var items = [];
    items.push(<Pagination.First />);
    let numPages = getNumPages(Object.keys(this.props.data).length, 10)
    for (let number = 1; number <= numPages; number++) {
      items.push(
        <Pagination.Item key={number} active={number == this.state.active}>
          {number}
        </Pagination.Item>
      );
    }
    items.push(<Pagination.Last />);

    this.setState({ pages: items });
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>CVE Number</th>
              <th>Severity</th>
              <th>Impact Score</th>
              <th>Exploitability Score</th>
              <th>Patched</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.data)
              .slice(this.state.start, this.state.end)
              .map((key, index) => this.renderRow(key))}
          </tbody>
        </Table>
        <Pagination
          style={{ width: "100%" }}
          onClick={(e) => this.changePage(e.target.text)}
        >
          {this.state.pages}
        </Pagination>
      </div>
    );
  }
}
