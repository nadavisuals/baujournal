import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import userContext from "../context/userContext"
import "../css/navbar.css";

const NavBar = () => {

  const { setUserData } = useContext(userContext);

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
      bg="dark"
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

            <Nav.Link>
              <Link to="/projects">Projekte</Link>
            </Nav.Link>

            <Nav.Link eventKey={2} onClick={() => logout()}>
            <Link to="#" >Logout</Link>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

  );
};

export default NavBar;
