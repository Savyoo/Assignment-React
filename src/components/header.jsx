import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" className="shadow" expand="lg">
        <Navbar.Brand>
          <Link to="/">Employee Info</Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/manageUser" className="mr-5">
              Manage User
            </Link>
            <Link to="/insertUser" className="mr-5">
              Insert User
            </Link>
            <Link to="/insertCompany">Insert Compnay</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
