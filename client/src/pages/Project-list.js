import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/NavBar";
import constants from "../constants/constants";
import "../css/style.css";

const Project = (props) => (
  <tr>
    <td>{props.projects.projectNr}</td>
    <td>{props.projects.projectTitle}</td>
    <td className="text-right">
      <Link
        to={
          "/update-project/" +
          props.projects.projectNr +
          "/" +
          props.projects.projectTitle +
          "/" +
          props.projects._id
        }
      >
        <Button variant="link">Bearbeiten</Button>
      </Link>
      |{" "}
      <Button
        variant="link"
        onClick={() => {
          props.deleteProject(props.projects._id);
        }}
      >
        Löschen
      </Button>
    </td>
  </tr>
);

export default class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);

    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get(constants.backend_url + "/projects/")
      .then((response) => {
        this.setState({ projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProject(id) {
    axios.delete(constants.backend_url + "/projects/" + id);
    this.setState({
      projects: this.state.projects.filter((el) => el._id !== id),
    });
  }

  projectList() {
    return this.state.projects
      .sort((a, b) => a.projectNr - b.projectNr)
      .map((currentproject) => {
        return (
          <Project
            projects={currentproject}
            deleteProject={this.deleteProject}
            key={currentproject._id}
          />
        );
      });
  }

  render() {
    return (
      <Container>
        <NavBar />
        <br />
        <div className="container content">
          <h5>Projekt Manager</h5>
          <div
            style={{ borderTop: "1px solid lightgray ", marginBottom: 20 }}
          ></div>
          <Link to="/create-project">
            {" "}
            <Button className="mb-3" variant="primary" type="button">
              Projekt hinzufügen
            </Button>
          </Link>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Projekt Nr.</th>
                <th>Projektname</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.projectList()}</tbody>
          </table>
        </div>
      </Container>
    );
  }
}
