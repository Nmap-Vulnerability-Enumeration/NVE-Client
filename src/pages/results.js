import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { readJSON, stringToObj } from "../helpers/files";
import TableAll from "../components/TableAll";
import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      filter: 'all',
      view: 'devices'
    };
    this.changeFilter = this.changeFilter.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  async componentDidMount() {
    var path = "/m.json";
    var _results = await readJSON(path);
    this.setState({
      results: _results["scan"],
    });
  }

  changeFilter =(newFilter) =>{
      this.setState({filter: newFilter})
  }

  changeView =(newView) =>{
    console.log(newView)
    this.setState({view: newView})
}

  render() {
    return (
      <Container fluid style={{padding:0}}>
        <div style={{ backgroundColor: "#1B1212" }}>
          <Row>
            <HeaderBar />
          </Row>
          <br />
          <Row style={{padding:0}}>
            <Col sm={10} >
              <ButtonGroup aria-label="Basic example" size="lg">
                <Button variant="secondary" onClick={()=> this.changeView("devices")}>Devices</Button>
                <Button variant="secondary" nClick={()=> this.changeView("vulnerabilities")}>Discovered Vulnerabilties</Button>
              </ButtonGroup>
            </Col>
            <Col>
              <Row>
                <Col>
                  <ButtonGroup aria-label="Basic example" size="lg">
                    <Button variant="secondary">Refresh</Button>
                    <Button variant="secondary">Export</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
        </div>
        <Row>
          <div style={{ backgroundColor: "#1B1212" }}>
            <Col sm={1}>
              <SideNav changeFilter= {this.changeFilter}/>
            </Col>
          </div>
          <Col style={{padding:0}}>
            <TableAll data={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}
//               {/* <hr style={{width: '10px', height: '20px', display: 'inline-block'}}/> */ }
