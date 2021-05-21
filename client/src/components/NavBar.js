import React, { useContext } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import userContext from "../context/userContext"
import "../css/style.css";
import "./navbar.css";

const NavBar = () => {

  const { userData, setUserData } = useContext(userContext);

  const history = useHistory();

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      className="top-nav"
    >
      <div className="container">
        <Navbar.Brand>
          <Link to="/day-choose-project">PITBAUjOURNAL</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/day-choose-project">Baujournal</Link>
            </Nav.Link>

            <Nav.Link className="active" eventKey={2}>
              <Link to="/projects">Projekte</Link>
            </Nav.Link>

            <Nav.Link eventKey={2} onClick={() => logout()}>
              <a>Logout</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

  );
};

export default NavBar;
