import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TableAll from "../Components/TableAll";
import HeaderBar from "../Components/HeaderBar";
import { backgroundStyle } from "../Helpers/styles";
import DetailsModal from "../Components/DetailsModal";
import FilterOptions from "../Components/FilterOptions";
import RefreshExport from "../Components/RefreshExport";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResults: [],
      shownResults: [],
      details: [],
      filter: "all",
      showDetails: false,
    };
    this.changeFilter = this.changeFilter.bind(this);
  }

  async componentDidMount() {
    await fetch("/api/v1/devices/all")
      .then((response) => response.json())
      .then((res) => this.setState({ allResults: res, shownResults: res }));
  }

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  hideDetailsModal = () => {
    this.setState({ details: [], showDetails: false });
  };

  showDetailsModal = async (ipAddress) => {
    await fetch("/api/v1/device?discovery_ip=" + ipAddress)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ details: res[0].value, showDetails: true });
        console.log(res[0].value);
      });
  };

  render() {
    return (
      <div style={backgroundStyle}>
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <HeaderBar fixed="top" />
          </Row>
          <br />
          <Row style={{ padding: 0 }}>
            <Col md={10}>
              <FilterOptions changeFilter={this.changeFilter} />
            </Col>
            <Col>
              <Row>
                <Col>
                  <RefreshExport
                    history={this.props.history}
                    params={this.props.match.params}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <div
            style={{
              backgroundColor: "#1e252d",
              width: "100%",
              display: "inline-flex !important",
            }}
          >
            <Col md="auto" style={{ Margin: 10 }}>
              <TableAll
                data={this.state.shownResults}
                showDetails={this.showDetailsModal}
              />
            </Col>
            <DetailsModal
              data={this.state.details}
              show={this.state.showDetails}
              close={this.hideDetailsModal}
            />
          </div>
        </Container>
      </div>
    );
  }
}
