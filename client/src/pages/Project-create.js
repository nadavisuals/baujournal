import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import constants from "../constants/constants";
import ErrorNotice from "../components/ErrorNotice";

const ProjectCreate = () => {
  const history = useHistory();
  const [projectNR, setProjectNR] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewProject = {
      projectNr: projectNR,
      projectTitle: projectTitle,
    };

    if (projectNR.trim() === "" || projectTitle.trim() === "") {
      return setError("Bitte alle Felder ausfüllen!");
    }

    axios
      .post(constants.backend_url + "/projects/add", NewProject)
      .then((res) => {
        setError(res.data.msg);
        if (res.data.msg === "Projekt erstellt!") {
          setError("")
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
          <h5 className="text-muted">Neues Projekt erstellen</h5>
        </div>

        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <div>
          <Form>
            <Form.Group style={{ maxWidth: "360px" }}></Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Projekt Nr.:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value={projectNR}
                  onChange={(e) => setProjectNR(e.target.value)}
                  type="number"
                  placeholder="Projekt Nr..."
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Projekt Titel:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  type="text"
                  placeholder="Projekt Titel..."
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
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="primary"
                  >
                    Speichern
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
