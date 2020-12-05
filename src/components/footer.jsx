import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <Card className="text-center mt-5 shadow">
          <Container>
            <Row>
              <Col>
                <h1 className="text-secondary">Footer</h1>
              </Col>
            </Row>
          </Container>
        </Card>
      </>
    );
  }
}

export default Footer;
