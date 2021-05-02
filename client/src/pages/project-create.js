import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import NavBar from "../components/navbar.component";

export default class ProjectCreate extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeProjectNr = this.onChangeProjectNr.bind(this);
        this.onChangeProjectTitle = this.onChangeProjectTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            projectNr: '',
          projectTitle: ''
        }
      }



    onChangeProjectNr(e) {
        this.setState({
            projectNr: e.target.value
        })
      }
    
      onChangeProjectTitle(e) {
        this.setState({
            projectTitle: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const project = {
            projectNr: this.state.projectNr,
            projectTitle: this.state.projectTitle
        }
    
        console.log(project);
    
        axios.post('http://localhost:5001/projects/add', project)
          .then(res => console.log(res.data));
    
        window.location = '/projects';
      }

  render() {
    return (
      <div>
          <NavBar />
          <br/>
          <Container>
          <div>
          <h5>Neues Projekt erfassen</h5>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Projektnummer: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.projectNr}
                  onChange={this.onChangeProjectNr}
                  />
            <label>Projektname: </label>
                <input 
                  type="text" 
                  className="form-control"
                  value={this.state.projectTitle}
                  onChange={this.onChangeProjectTitle}
                />
            </div>
          
            <div className="form-group">
              <input type="submit" value="Speichern" className="btn btn-primary" />
            </div>
            <Button className="mb-3" href="/projects"variant="primary">Abrechen</Button>

          


          </form>
        </div>
        </Container>
      </div>
    )
  }
}

