import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "@material-ui/core/TablePagination";
import { handleEmpty, getNumPages, sliceObject } from "../Helpers/processdata";
import CustomButton from "./CustomButton";
import { PureComponent } from "react";
import { event } from "jquery";

export default class VulnerabilitiesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      activePage: 0,
      rowsPerPage: 10,
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

  changePage = (entry) => {
    let page = this.parseOutput(entry);

    if (page) {
      this.setState({
        activePage: page,
        pages: this.loadPagination(Object.keys(this.props.data).length, page),
      });
    }
  };

  handleChangePage = (event, newPage) => {
    this.setState({ activePage: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      activePage: 0,
    });
  };

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
            {sliceObject(
              this.props.data,
              this.state.activePage,
              this.state.rowsPerPage
            ).map((key, index) => this.renderRow(key))}
          </tbody>
        </Table>
        <TablePagination
          component="div"
          style={{color: 'inherit', font:'inherit'}}
          count={Object.keys(this.props.data).length}
          page={this.state.activePage}
          onChangePage={this.handleChangePage}
          rowsPerPage={this.state.rowsPerPage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}
