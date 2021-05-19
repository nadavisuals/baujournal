import React from "react";
import {  Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/style.css";

const NavBar = () => {
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
  
              <Nav.Link className="active" eventKey={2}>
                <Link to="/projects">Projekte</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

        );
    };
    
    export default NavBar;



    // const NavBar = () => {
    //     return (
    
    //             <Navbar bg="white" variant="light">
    //                 <Navbar.Brand href="/">PITBAUjOURNAL</Navbar.Brand>
    //                 <Nav className="ml-auto">
    //                     <Nav.Link href="/">Baujournal</Nav.Link>
    //                     <Nav.Link href="/projects">Projekte</Nav.Link>
    //                 </Nav>
    //             </Navbar>
    
    //         );
    //     };
        