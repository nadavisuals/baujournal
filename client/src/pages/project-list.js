import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import NavBar from "../components/navbar.component";


export default class ProjectList extends Component {
  render() {
    return (
        <Container>
        <div>
        <NavBar />
          <h5>Projekt Manager</h5>
          <div style={{ borderTop: "1px solid lightgray ", marginBottom: 20 }}></div>
          <Button className="mb-3" href="/create-project"variant="primary">Projekt hinzufügen</Button>
          
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Projektnummer</th>
                <th>Projektname</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              Hier kommt die Projektliste
            </tbody>
          </table>
        </div>
        </Container>
    )
  }
}