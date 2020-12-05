import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
class ManageUser extends Component {
  state = {
    userList: [],
    companyList: [],
    userSelect: "",
    companiesSelect: [],
  };
  componentDidMount = async () => {
    axios.get("http://localhost:8989/users").then((res) => {
      const userListLocal = res.data;
      console.log(userListLocal);
      this.setState((prevstate) => ({ ...prevstate, userList: userListLocal }));
    });
    axios.get("http://localhost:8989/companies").then((res) => {
      const companyListLocal = res.data;
      this.setState((prevstate) => ({
        ...prevstate,
        companyList: companyListLocal,
      }));
    });
  };

  userElements = () => {
    const cardList = this.state.userList;
    console.log("state", cardList[0]);
    // <option selected value={this.state.userList[0][0]["name"]}>
    // {this.state.userList[0]["name"]}
    // </option>;
    const cardListMain = cardList.map((c) => (
      // console.log("tt", c["name"]);
      <option key={c["phone"]} value={c["name"]}>
        {c["name"]}
      </option>
    ));
    console.log(cardListMain);
    return cardListMain;
  };

  companyElements = () => {
    const cardList = this.state.companyList;
    console.log(this.state.userList);
    const cardListMain = cardList.map((c) => (
      // console.log("tt", c["name"]);
      <option key={c["name"]} value={c["name"]}>
        {c["name"]}
      </option>
    ));
    console.log(cardListMain);
    return cardListMain;
  };

  handleUserSelect = (data) => {
    this.setState((prevstate) => ({ ...prevstate, userSelect: data }));
  };

  handleCompaniesSelect = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    // this.setState({value: value});
    this.setState((prevstate) => ({ ...prevstate, companiesSelect: value }));
    console.log(value);
  };

  handleSubmit = async () => {
    // console.log(this.state);
    if (this.state.userSelect == null || this.state.companiesSelect.length < 1)
      alert("Select inputs");
    else
      axios
        .post(
          "http://localhost:8989/users/" + this.state.userSelect,
          this.state
        )
        .then((resp) => {
          if (resp != null) alert("Companies Added");
        });
  };

  render() {
    return (
      <>
        <Card className="text-center mt-5 shadow">
          <Container>
            <Row>
              {/* {this.userElements()} */}
              <Col xm={12} sm={12} className="m-3">
                <select
                  onChange={(e) => {
                    console.log("selected");
                    this.handleUserSelect(e.target.value);
                  }}
                >
                  <option selected value=""></option>
                  {this.userElements()}
                </select>
              </Col>

              <Col xm={12} sm={12} className="m-3">
                <select
                  onChange={(e) => {
                    console.log("selected");
                    this.handleCompaniesSelect(e);
                  }}
                  multiple
                >
                  <option selected value="">
                    Please select one or multiple
                  </option>
                  {this.companyElements()}
                </select>
              </Col>
              <Col xm={12} sm={12} className="m-3">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  set company
                </button>
              </Col>
            </Row>
          </Container>
        </Card>
      </>
    );
  }
}

export default ManageUser;
