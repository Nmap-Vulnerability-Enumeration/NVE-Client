import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TableAll from "../Components/TableAll";
import HeaderBar from "../Components/HeaderBar";
import { backgroundStyle } from "../Helpers/styles";
import DetailsModal from '../Components/DetailsModal'
import FilterOptions from "../Components/FilterOptions";
import RefreshExport from "../Components/RefreshExport"

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResults: [],
      shownResults: [],
      filter: "all"
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

  loadVulnerabilities = async (identifier) =>  {
    await fetch("/api/v1/devices/all")
      .then((response) => response.json())
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div style={backgroundStyle}>
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <HeaderBar fixed="top"/>
          </Row>
          <br />
          <Row style={{ padding: 0 }}>
            <Col md={10}>
              <FilterOptions changeFilter={this.changeFilter}/>
            </Col>
            <Col>
              <Row>
                <Col>
                  <RefreshExport history={this.props.history} params={this.props.match.params}/>
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
            <Row>
              <div style={{ backgroundColor: "#1e252d" }}>
                <Col md="auto" style={{ Margin: 10 }}>
                  <TableAll data={this.state.shownResults} />
                </Col>
                <DetailsModal show ={false} />
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
