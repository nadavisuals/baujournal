import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import userContext from "../context/userContext";
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
          <Link className="navbar-brand" to="/day-choose-project">PITBAUjOURNAL</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/day-choose-project">Baujournal{" "}</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projekte{" "}</Nav.Link>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
