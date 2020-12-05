import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
class InsertUesr extends Component {
  state = { name: "", email: "", phone: "" };
  handleNameChange = (data) => {
    this.setState((prevState) => ({ ...prevState, name: data }));
  };

  handleEmailChange = (data) => {
    this.setState((prevState) => ({ ...prevState, email: data }));
  };

  handlePhoneChange = (data) => {
    this.setState((prevState) => ({ ...prevState, phone: data }));
  };

  handleSubmit = async () => {
    const resp = await axios.post("http://localhost:8989/users", this.state);
    console.log(resp);
    if (resp != null) alert("Record Inserted");
  };
  render() {
    return (
      <>
        <Container>
          <Row className="text-center">
            <Col xm={12} sm={12} className="m-3">
              <input
                placeholder="Name"
                type="text"
                onChange={(e) => {
                  this.handleNameChange(e.target.value);
                }}
              />
            </Col>
            <Col xm={12} sm={12} className="m-3">
              <input
                placeholder="email"
                type="email"
                onChange={(e) => {
                  this.handleEmailChange(e.target.value);
                }}
              />
            </Col>
            <Col xm={12} sm={12} className="m-3">
              <input
                placeholder="Phone No"
                type="text"
                onChange={(e) => {
                  this.handlePhoneChange(e.target.value);
                }}
              />
            </Col>
            <Col xm={12} sm={12} className="m-3">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Insert
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default InsertUesr;
