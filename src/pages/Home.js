import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import LoadingModal from "../Components/LoadingModal";
import { backgroundStyle, H1Style } from "../Helpers/styles";
import { FormGroup } from "react-bootstrap";
import { setUp, redirect } from "../Helpers/requests";

export default class Home extends Component {
  f;
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      IpAddress: "",
      SubnetMask: "",
      showModal: false,
    };
  }

  cacheResults = async () => {
    this.handleShow();

    //  cache results
    await fetch("/api/v1/devices/all")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        redirect(
          this.props.history,
          this.state.IpAddress,
          this.state.SubnetMask
        );
      })
      .catch((error) => {
        alert("Error Code: " + error);
        this.handleClose()
        console.log(error);
      });
  };

  handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ isValidated: true });

      // register address and subnet mask
      let request = setUp(this.state.IpAddress, this.state.SubnetMask);
      await fetch("/api/v1/setup", request)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          this.cacheResults()
        })
        .catch((error) => {
          alert("Error Code: " + error);
          this.handleClose()
          console.log(error);
        });
    }
  };

  handleChange = (event) => {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    this.setState({ [fieldName]: fleldVal });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div style={backgroundStyle}>
        <Container
          fluid
          style={{
            padding: 0,
            backgroundColor: "#1e252d",
            textAlign: "center",
          }}
        >
          <LoadingModal
            handleClose={this.handleClose}
            showModal={this.state.showModal}
          />
          <Row md={5}>
            <br />
            <br />
          </Row>
          <Row md={1}>
            <Col style={{ textAlign: "center" }}>
              <h1 style={H1Style}>NMap Vulnerabilty Enumerator</h1>
            </Col>
          </Row>
          <Row md={2} style={{ display: "flex", justifyContent: "center" }}>
            <Col>
              <Form
                noValidate
                validated={this.state.isValidated}
                onSubmit={this.handleSubmit}
                style={{ margin: 0 }}
              >
                <InputGroup className="mb-3" style={{ margin: 0 }}>
                  <FormGroup>
                    <FormControl
                      placeholder="IP Address"
                      required
                      name="IpAddress"
                      onChange={this.handleChange}
                      type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                      enter a value
                    </Form.Control.Feedback>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder="Subnet Mask"
                      required
                      name="SubnetMask"
                      onChange={this.handleChange}
                      type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                      enter a value
                    </Form.Control.Feedback>
                  </FormGroup>
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      type="submit"
                      style={{
                        margin: 0,
                        marginLeft: 2,
                        height: 40,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row md={4}></Row>
        </Container>
      </div>
    );
  }
}
