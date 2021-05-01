import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavBar from "../components/navbar.component";

export default class ProjectCreate extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Container>
        <div>
          <h5>Neues Projekt erfassen</h5>
          <form>
            <div className="form-group"> 
              <label>Projektnummer: </label>
              <input 
                  type="text" 
                  className="form-control"
                  />
            <label>Projektname: </label>
                <input 
                  type="text" 
                  className="form-control"
                />
            </div>
          
            <Button className="mb-3" href="/projects"variant="primary">Speichern</Button> &nbsp;
            <Button className="mb-3" href="/projects"variant="primary">Abrechen</Button>
          </form>
        </div>
        </Container>
      </div>
    )
  }
}

