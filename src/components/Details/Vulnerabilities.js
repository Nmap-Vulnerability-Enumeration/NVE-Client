import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { handleEmpty, doesExist } from "../../Helpers/processdata";

export default class Vulnerabilities extends Component {
  constructor(props) {
    super(props);
    this.state = { res: [], loaded: false, scanning: false };
    this.getVulnerabilities = this.getVulnerabilities.bind(this);
  }

  componentDidMount() {
    if (doesExist(this.props.data.vuls)) {
      this.setState({ res: this.props.data.vulns, loaded: true });
    } else {
      this.setState({ res: [], loaded: false });
    }
  }

  loadButton = () => {
    if (this.state.scanning) {
      return (
        <Button variant="outline-dark" style={{ width: 40 }}>
          <Spinner animation="border" size="sm"/>
        </Button>
      );
    } else {
      return (
        <Button
          variant="outline-dark"
          onClick={this.getVulnerabilities}
          style={{ width: 40 }}
        >
          Load
        </Button>
      );
    }
  };

  getVulnerabilities = async () => {
    this.setState({ scanning: true });
    await fetch(
      "/api/v1/device/vuln?discovery_ip=" + this.props.data.ip.discovery
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        response.json();
      })
      .then((res) => {
        this.setState({ vulnerabilities: res, loaded: true, scanning: false });
        console.log(res);
      })
      .catch( (error)=> {
        this.setState({ vulnerabilities: [], loaded: true, scanning: false });
        console.log(error);
      });
  };

  render() {
    return (
      <Card style={{ width: "100%", margin: 20 }}>
        <Card.Header>
          <Card.Title> Vulnerabilities</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.loaded
              ? this.state.res.length + " found"
              : this.loadButton()}
          </Card.Subtitle>
        </Card.Header>
      </Card>
    );
  }
}
