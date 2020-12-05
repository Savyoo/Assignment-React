import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
class Body extends Component {
  state = { userList: [] };
  componentDidMount = async () => {
    axios.get("http://localhost:8989/users").then((res) => {
      const userListLocal = res.data;
      console.log(userListLocal);
      this.setState({ userList: userListLocal }, () => {});
    });
  };
  render() {
    return (
      <Container className="text-center">
        <Row className="p-3">{this.users()}</Row>
      </Container>
    );
  }
  users = () => {
    console.log("ent", this.state.userList[0]);
    const cardList = this.state.userList;
    console.log("ccc", cardList);
    var i = 0;
    const cardListMain = cardList.map((c) => (
      // console.log("tt", c["name"]);
      <Col className="mb-3" key={c["phone"]} xm={12} sm={4}>
        <Card className="shadow-lg">
          <Card.Body>
            <Card.Text>
              {c["name"]}
              <br />
              {c["email"]}
              <br />
              {c["phone"]}
              <br />
              <h5>Companies</h5>
              <br />
              {c["companies"].length > 0 ? (
                c["companies"].map((c) => <p>{c},</p>)
              ) : (
                <p>None</p>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
    console.log(cardListMain);
    return cardListMain;
  };
}

export default Body;
