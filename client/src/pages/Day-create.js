import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import constants from "../constants/constants";
import ErrorNotice from "../components/ErrorNotice";
import "../css/style.css";

const DayCreate = () => {
  const history = useHistory();
  var date = new Date().toISOString().split("T")[0];

  let { projectNr, projectTitle } = useParams();
  const [timeFrom, setTimeFrom] = useState("");
  const [makeDate, setMakeDate] = useState(date.toString());
  const [timeUntill, setTimeUntill] = useState("");
  const [weather, setWeather] = useState("");
  const [workers, setWorkers] = useState("");
  const [temperature, setTemperature] = useState("");
  const [workProgress, setWorkProgress] = useState("");
  const [workPlaning, setWorkPlaning] = useState("");
  const [safety, setSafety] = useState("");
  const [error, setError] = useState();

  const getProjectNR = projectNr;

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewDay = {
      projectNr: getProjectNR,
      date: makeDate,
      timeFrom: timeFrom,
      timeUntil: timeUntill,
      weather: weather,
      workers: workers,
      temperature: temperature,
      workProgress: workProgress,
      workPlaning: workPlaning,
      safety: safety,
    };

    axios.post(constants.backend_url + "/days/add", NewDay).then((res) => {
      setError(res.data.msg);
      if (res.data.msg === "New Day added!") {
        history.goBack();
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div className="container content">
        <Form>
          <DropDown title={projectTitle} nr={projectNr} />

          <div className="my-3">
            {error && (
              <ErrorNotice
                message={error}
                clearError={() => setError(undefined)}
              />
            )}
          </div>

          <Form.Group>
            <Form.Label>Datum</Form.Label>
            <input
              value={makeDate}
              onChange={(e) => setMakeDate(e.target.value)}
              style={{ width: "50%" }}
              type="date"
              className="form-control"
            />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Uhrzeit von:</Form.Label>
                <input
                  onChange={(e) => setTimeFrom(e.target.value)}
                  style={{ width: "70%" }}
                  type="time"
                  className="form-control"
                />
              </Col>
              <Col>
                <Form.Label>Uhrzeit bis</Form.Label>
                <input
                  onChange={(e) => setTimeUntill(e.target.value)}
                  style={{ width: "70%" }}
                  type="time"
                  className="form-control"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group style={{ maxWidth: "360px" }}>
            <Form.Label>Wetter:</Form.Label>

            <select
              onChange={(e) => setWeather(e.target.value)}
              className="custom-select custom-select-sm mb-3"
            >
              <option value={""}></option>
              <option value={"Sonnig"}>Sonnig</option>
              <option value={"Bewölkt"}>Bewölkt</option>
              <option value={"Regen"}>Regen</option>
              <option value={"Schnee"}>Schnee</option>
            </select>
          </Form.Group>
          <Form.Group style={{ maxWidth: "360px" }}>
            <Form.Label>Aussenemperatur C&#730;:</Form.Label>
            <Form.Control
              type="number"
              placeholder="..."
              onChange={(e) => setTemperature(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Anwesende Firmen:</Form.Label>
            <Form.Control
              onChange={(e) => setWorkers(e.target.value)}
              type="text"
              placeholder="..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stand der Arbeit:</Form.Label>
            <Form.Control
              onChange={(e) => setWorkProgress(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Organisatorisches</Form.Label>
            <Form.Control
              onChange={(e) => setWorkPlaning(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>BauKG:</Form.Label>
            <Form.Control
              onChange={(e) => setSafety(e.target.value)}
              type="text"
              placeholder="..."
            />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="d-flex justify-content-end">
                <Link
                  to={"/day-project-details/" + projectNr + "/" + projectTitle}
                >
                  <Button variant="dark">Abbrechen</Button>
                </Link>
                <div className="p-2"></div>
                <Button onClick={handleSubmit} variant="primary">
                  Speichern
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
      {/* Footer */}
      <div></div>
    </div>
  );
};

export default DayCreate;
