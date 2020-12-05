import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
class InsertCompany extends Component {
  state = { name: "", city: "" };
  handleNameChange = (data) => {
    this.setState((prevState) => ({ ...prevState, name: data }));
  };

  handleCityChange = (data) => {
    this.setState((prevState) => ({ ...prevState, city: data }));
  };

  handleSubmit = async () => {
    if (this.state.name != "" && this.state.city != "") {
      const resp = await axios.post(
        "http://localhost:8989/companies",
        this.state
      );
      alert("Company added");
      console.log(resp);
    } else alert("Please enter inputs");
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
                placeholder="City"
                type="text"
                onChange={(e) => {
                  this.handleCityChange(e.target.value);
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

export default InsertCompany;
