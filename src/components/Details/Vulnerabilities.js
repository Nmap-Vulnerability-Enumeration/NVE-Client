import React, { Component } from "react";
import Button from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import VulnerabilitiesTable from "../VulnerabilitiesTable"
import { handleEmpty, doesExist } from "../../Helpers/processdata";

export default class Vulnerabilities extends Component {
  constructor(props) {
    super(props);
    this.state = { res: [], loaded: false, scanning: false, showAlert: false };
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
          <Spinner animation="border" size="sm" />
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
        return response.json();
      })
      .then((res) => {
        this.setState({
          vulnerabilities: res[0],
          loaded: true,
          scanning: false,
        });
        console.log(res[0]);
      })
      .catch((error) => {
        this.setState({
          vulnerabilities: [],
          loaded: false,
          scanning: false,
          showAlert: true,
        });
        console.log(error);
      });
  };

  alertMessage = () => {
    if (this.state.showAlert) {
      return (
        <Alert
          style={{ marginLeft: 20 }}
          variant="danger"
          onClose={() => this.setState({ showAlert: false })}
          dismissible
        >
          Loading Vulnerabilities failed, please try again later.
        </Alert>
      );
    }
  };

  render() {
    return (
      <div style={{ width: "100%", marginRight: 30 }}>
        {this.alertMessage()}
        <Card
          style={{
            width: "100%",
            marginRight: 20,
            marginLeft:20,
            backgroundColor: "#343a40",
            color: "#f8f9fa",
          }}
        >
          <Card.Header>
            <Card.Title>
              <b>Vulnerabilities:</b>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                  {this.state.loaded
                    ? Object.keys(this.state.vulnerabilities).length + " found"
                    : this.loadButton()}
            </Card.Subtitle>
            {(this.state.loaded && Object.keys(this.state.vulnerabilities).length > 0)? <VulnerabilitiesTable data={this.state.vulnerabilities}/> : ""}
          </Card.Header>
        </Card>
      </div>
    );
  }
}
