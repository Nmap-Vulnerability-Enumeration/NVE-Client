import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { txtToJSON, stringToObj } from "../helpers/files";

export const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo",
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar",
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline",
      },
    ],
  },
};


var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = ({}).constructor;

function whatIsIt(object) {
    if (object === null) {
        return "null";
    }
    if (object === undefined) {
        return "undefined";
    }
    if (object.constructor === stringConstructor) {
        return "String";
    }
    if (object.constructor === arrayConstructor) {
        return "Array";
    }
    if (object.constructor === objectConstructor) {
        return "Object";
    }
    else  {
        return "don't know";
    }
}

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.Row = this.row.bind(this);
  }
  row = (block) => {
    return React.createElement(() => (
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    ));
  };

  async componentDidMount() {
    /* axios.get('../../public/pretty_dummy.txt')
    .then(function (response) {
        console.log(response);
      }); */

    //console.log(JSON.parse('../../public/pretty_dummy.txt'))

    var path = "/pretty_dummy.json";
    var _results = await txtToJSON(path);
    //console.log(_results);
    /*  fetch(path)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          results: stringToObj(text),
        });
      }); */
    this.setState({
      results: _results
    });

    console.log(this.state.results);
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <h1>Nmap Vulnerability Emumerator</h1>
        </Row>
        <Row>
          <Col sm={2}>
            <h2> Devices</h2>
          </Col>
          <Col sm={8}>
            <h2> Discovered Vulnerabilties</h2>
          </Col>
          <Col>
            <Row>
              <Col>
                <Alert.Link>Refresh </Alert.Link>
                <Alert.Link> Export</Alert.Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Table striped bordered hover variant="dark" responsive>
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
          <tbody>{data.content.body.map((block) => this.row())}</tbody>
        </Table>
      </Container>
    );
  }
}
//               {/* <hr style={{width: '10px', height: '20px', display: 'inline-block'}}/> */ }
