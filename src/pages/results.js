import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { readJSON, stringToObj } from "../helpers/files";
import TableAll from '../components/TableAll';
import SideNav from '../components/SideNav'
import HeaderBar from '../components/HeaderBar'

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
    };
  }

  async componentDidMount() {
    /* axios.get('../../public/pretty_dummy.txt')
    .then(function (response) {
        console.log(response);
      }); */

    //console.log(JSON.parse('../../public/pretty_dummy.txt'))

    var path = "/m.json";
    var _results = await readJSON(path);
    this.setState({
      results: _results["scan"],
    });
    console.log(this.state.results);
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <HeaderBar/>
        </Row>
        <br/>
        <Row>
          <Col sm={10}>
            <ButtonGroup aria-label="Basic example" size="lg">
              <Button variant="secondary">Devices</Button>
              <Button variant="secondary">Discovered Vulnerabilties</Button>
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
        <br/>
        <Row>
            <Col sm={1}>
                <SideNav/>
            </Col>
            <Col>
            <TableAll data={this.state.results}/>
            </Col>
        </Row>
      </Container>
    );
  }
}
//               {/* <hr style={{width: '10px', height: '20px', display: 'inline-block'}}/> */ }
