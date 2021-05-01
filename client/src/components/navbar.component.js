import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default class NavBar extends Component {

    render() {
        return (
            <Navbar bg="white" variant="light">
                <Navbar.Brand href="/">PITBAUjOURNAL</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Baujournal</Nav.Link>
                    <Nav.Link href="/projects">Projekte</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}