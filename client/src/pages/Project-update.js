import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import ErrorNotice from "../components/ErrorNotice";
import constants from "../constants/constants";
import "../css/style.css";

const ProjectUpdate = (props) => {
  const history = useHistory();
  let { projectNr, projectTitle, projectId } = useParams();

  const [getProjectNR] = useState(projectNr);
  const [getProjectTitle, setProjectTitle] = useState(projectTitle);
  const [error, setError] = useState();

  const handleSave = (e) => {
    e.preventDefault();
    const NewProject = {
      projectNr: getProjectNR,
      projectTitle: getProjectTitle,
    };

    axios
      .post(constants.backend_url + "/projects/update/" + projectId, NewProject)
      .then((res) => {
        setError(res.data.msg);
        console.log(res.data.msg);
        if (res.data.msg === "Projekt aktualisiert!") {
          history.goBack();
        }
      });

  };

  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: "20px" }}></div>

      <div className="container content">
        <div>
          <h5 className="text-muted">Projekt bearbeiten</h5>
        </div>

         {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )} 

        <div>
          <Form>
            <Form.Group style={{ maxWidth: "360px" }}></Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm="2">
                Projekt Nr.:
              </Form.Label>
              <Col sm="10"> {projectNr} </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Projekt Titel:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Projekt Title..."
                  value={getProjectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col className="d-flex justify-content-end">
                  <Link to={"/projects"}>
                    <Button variant="dark">Abbrechen</Button>
                  </Link>

                  <div className="p-2"></div>
                  <Button onClick={handleSave} variant="primary">
                    Speichern
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </div>
      {/* Footer */}
      <div></div>
    </div>
  );
};

export default ProjectUpdate;
