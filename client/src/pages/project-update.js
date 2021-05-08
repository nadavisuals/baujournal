import React, { Component } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import { Container } from 'react-bootstrap';

export default class ProjectUpdate extends Component {

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

  componentDidMount() {
    axios.get('http://localhost:5001/projects/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          projectNr: response.data.projectNr,
          projectTitle: response.data.projectTitle,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5001/projects/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            projects: response.data.map(project => project.projects),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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

    axios.post('http://localhost:5001/projects/update/' + this.props.match.params.id, project)
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
          <h5>Projekt anpassen</h5>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
            <label>Projektnummer: </label>
              <input 
                  type="text" 
                  className="form-control mb-3"
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
          </form>
        </div>
        </Container>

    </div>
    )
  }
}