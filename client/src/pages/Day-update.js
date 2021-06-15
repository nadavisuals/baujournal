import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import DropDown from "../components/DropDown";
import NavBar from "../components/NavBar";
import ErrorNotice from "../components/ErrorNotice";
import constants from "../constants/constants";
import "../css/style.css";

class DayUpdate extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {
      dayId: "",
      timeFrom: "",
      makeDate: "",
      timeUntil: "",
      weather: "",
      workers: "",
      temperature: "",
      workProgress: "",
      workPlaning: "",
      safety: "",
      error: "",
      allData: [],
      goBack: false,
    };
    this.getDayData = this.getDayData.bind(this);
  }

  componentDidMount() {
    this.getDayData(this.props.match.params.id);
  }

  getDayData(id) {
    axios
      .get(constants.backend_url + "/days/get-day-detail/" + id)
      .then((response) => {
        this.setState({
          allData: response.data,
        });
        this.state.allData.forEach((item) => {
          this.setState({
            makeDate: item.date,
            dayId: item._id,
            timeFrom: item.timeFrom,
            timeUntil: item.timeUntil,
            weather: item.weather,
            workers: item.workers,
            temperature: item.temperature,
            workProgress: item.workProgress,
            workPlaning: item.workPlaning,
            safety: item.safety,
            error: "",
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const NewDay = {
      projectNr: this.props.match.params.projectNr,
      date: this.state.makeDate,
      timeFrom: this.state.timeFrom.toString(),
      timeUntil: this.state.timeUntil.toString(),
      weather: this.state.weather,
      workers: this.state.workers,
      temperature: this.state.temperature.toString(),
      workProgress: this.state.workProgress,
      workPlaning: this.state.workPlaning,
      safety: this.state.safety,
    };

    await axios.post(
      constants.backend_url + "/days/update/" + this.state.dayId,
      NewDay
    );
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="container content">
          <Form>
            <DropDown
              title={this.props.match.params.projectTitle}
              nr={this.props.match.params.projectNr}
            />

            {this.state.error && (
              <ErrorNotice
                message={this.state.error}
                clearError={() =>
                  this.setState({
                    error: undefined,
                  })
                }
              />
            )}

            {this.state.allData.map((item, index) => {
              return (
                <div>
                  <Form.Group>
                    <Form.Label>Datum</Form.Label>

                    <input
                      key={"index"}
                      readOnly
                      value={this.state.makeDate}
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
                          key={"index"}
                          value={this.state.timeFrom}
                          onChange={(e) =>
                            this.setState({
                              timeFrom: e.target.value,
                            })
                          }
                          style={{ width: "70%" }}
                          type="time"
                          className="form-control"
                        />
                      </Col>
                      <Col>
                        <Form.Label>Uhrzeit bis:</Form.Label>
                        <input
                          key={"index"}
                          value={this.state.timeUntil}
                          onChange={(e) =>
                            this.setState({
                              timeUntil: e.target.value,
                            })
                          }
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
                      key={"index"}
                      onChange={(e) =>
                        this.setState({
                          weather: e.target.value,
                        })
                      }
                      className="custom-select custom-select-sm mb-3"
                      value={this.state.weather}
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
                      key={"index"}
                      type="number"
                      placeholder="..."
                      value={this.state.temperature}
                      onChange={(e) =>
                        this.setState({
                          temperature: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Anwesende Firmen:</Form.Label>
                    <Form.Control
                      key={"index"}
                      value={this.state.workers}
                      onChange={(e) =>
                        this.setState({
                          workers: e.target.value,
                        })
                      }
                      as="textarea"
                      rows={3}
                      placeholder="..."
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stand der Arbeit:</Form.Label>
                    <Form.Control
                      key={"index"}
                      rows={3}
                      value={this.state.workProgress}
                      onChange={(e) =>
                        this.setState({
                          workProgress: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="..."
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Organisatorisches:</Form.Label>
                    <Form.Control
                      key={"index"}
                      value={this.state.workPlaning}
                      onChange={(e) =>
                        this.setState({
                          workPlaning: e.target.value,
                        })
                      }
                      as="textarea"
                      rows={3}
                      placeholder="..."
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>BauKG:</Form.Label>
                    <Form.Control
                      key={"index"}
                      value={this.state.safety}
                      onChange={(e) =>
                        this.setState({
                          safety: e.target.value,
                        })
                      }
                      as="textarea"
                      rows={3}
                      placeholder="..."
                    />
                  </Form.Group>
                  <Form.Group>
                    <Row>
                      <Col className="d-flex justify-content-end">
                        <Link
                          to={
                            "/day-project-details/" +
                            this.props.match.params.projectNr +
                            "/" +
                            this.props.match.params.projectTitle
                          }
                        >
                          <Button variant="dark">Abbrechen</Button>
                        </Link>
                        <div className="p-2"></div>
                        <Button
                          key={"index"}
                          onClick={(e) => this.handleSubmit(e)}
                          variant="primary"
                        >
                          Speichern
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
              );
            })}
          </Form>
        </div>
      </div>
    );
  }
}

export default DayUpdate;
