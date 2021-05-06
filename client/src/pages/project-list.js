import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import NavBar from "../components/navbar.component";


const Project = props => (
    <tr>
    <td>{props.projects.projectNr}</td>
    <td>{props.projects.projectTitle}</td>
    <td>
    {/* <Button className="mb-3" href={"/update-project/"+props.projects._id}variant="primary">Bearbeiten</Button>
    &nbsp;
    <Button className="mb-3" href={"/projects"}variant="primary" onClick={() => { props.deleteProject(props.projects._id) }}>Löschen</Button> */}

      <Link to={"/update-project/"+props.projects._id}>Bearbeiten</Link> | <a href="#" onClick={() => { props.deleteProject(props.projects._id) }}>Löschen</a>
    </td>
  </tr>
)

export default class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this)

    this.state = {projects: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/projects/')
      .then(response => {
        this.setState({ projects: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProject(id) {
    axios.delete('http://localhost:5001/projects/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      projects: this.state.projects.filter(el => el._id !== id)
    })
  }

//   projectList() {
//     return this.state.projects.map(currentproject => {
//       return <Project projects={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
//     })
//   }

projectList() {
  return this.state.projects.sort((a, b) => a.projectNr - b.projectNr).map(currentproject => {
    return <Project projects={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
  })
}

  // projectList() {
  //   return this.state.projects.sort((a, b) => a.projectNr > b.projectNr ? 1 : -1).map(currentproject => {
  //     return <Project projects={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
  //   })
  // }



  render() {
    return (
        <Container>
        <div>
        <NavBar />
        <br/>
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
                { this.projectList() }
            </tbody>
          </table>
        </div>
        </Container>
    )
  }
}