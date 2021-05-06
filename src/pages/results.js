import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { readJSON, stringToObj } from "../Helpers/files";
import TableAll from "../Components/TableAll";
import TableVulnerabilities from "../Components/TableVulnerabilities";
import SideNav from "../Components/SideNav";
import HeaderBar from "../Components/HeaderBar";
import { backgroundStyle } from "../Helpers/styles";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      filter: "all",
      view: "devices",
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  async componentDidMount() {
    await fetch("/api/v1/devices/all")
    .then( response => response.json())
    .then(res => this.setState({results: res}))
  }

  refreshPage = () =>{
    this.props.history.push(
      "/scan/IpAddress=" +
        this.props.match.params.address +
        "&SubnetMask=" +
        this.props.match.params.mask
    );
  }
  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  RenderResults = () => {
    if (this.state.view === "devices") {
      return <TableAll data={this.state.results} />;
    } else {
      return <TableVulnerabilities data={this.state.results} />;
    }
  };

  changeView = (newView) => {
    console.log(newView);
    this.setState({ view: newView });
  };

  render() {
    return (
      <div style={backgroundStyle}>
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <HeaderBar />
          </Row>
          <br />
          <Row style={{ padding: 0 }}>
            <Col md={10}>
              <ButtonGroup aria-label="Basic example" size="lg">
                <Button
                  variant="secondary"
                  onClick={() => this.changeView("devices")}
                >
                  Devices
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => this.changeView("vulnerabilities")}
                >
                  Discovered Vulnerabilties
                </Button>
              </ButtonGroup>
            </Col>
            <Col>
              <Row>
                <Col>
                  <ButtonGroup aria-label="Basic example" size="lg">
                    <Button variant="secondary" onClick={this.refreshPage}>Refresh</Button>
                    <Button variant="secondary">Export</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              display: "inline-flex !important",
            }}
          >
            <Row>
              <div style={{ backgroundColor: "black" }}>
                <Col md={1}>
                  <SideNav changeFilter={this.changeFilter} />
                </Col>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <Col md="auto" style={{ padding: 0 }}>
                  {this.RenderResults()}
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
