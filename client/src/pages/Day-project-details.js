import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button, Accordion, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import constants from "../constants/constants";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/style.css";

function DayList () {
  // const history = useHistory();
  let { projectNr, projectTitle } = useParams();
  const [allDays, setAllDays] = useState([]);
  //  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect( () => {
    axios
      .post(constants.backend_url + "/days/get-days/" + projectNr)
      .then((response) => {
        setAllDays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[projectNr]);

  const handleDelete = (id) => {
    axios
      .delete(constants.backend_url + "/days/" + id)
      .then((res) => console.log(res.data));
   //   history.push("/day-project-details/" + projectNr + "/" + projectTitle);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allDays.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <NavBar />
      <br />
      <div className="container content">
        <Form>
          <DropDown title={projectTitle} nr={projectNr} />

          <Form.Group>
            <Link to={"/day-create/" + projectNr + "/" + projectTitle}>
              <Button variant="primary">Neuen Tag erstellen</Button>
            </Link>
          </Form.Group>

          <Form.Group>
            <Accordion>
              {currentPosts
                .slice(0)
                .map((item) => {
                  return (
                    <Card key={item._id}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={item._id}
                        >
                          {item.date}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={item._id}>
                        <Card.Body>
                          <Row>
                            <Col>
                              <h5>Uhrzeit von:</h5>
                              <p className="text-muted">{item.timeFrom}</p>
                              <br></br>
                            </Col>
                            <Col>
                              <h5>Uhrzeit bis:</h5>
                              <p className="text-muted">{item.timeUntil}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Wetter:</h5>
                              <p className="text-muted">{item.weather}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Aussenemperatur C&#730;:</h5>
                              <p className="text-muted">{item.temperature}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Anwesende Firmen:</h5>
                              <p className="text-muted">{item.workers}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Stand der Arbeit:</h5>
                              <p className="text-muted">{item.workProgress}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Organisatorisches</h5>
                              <p className="text-muted">{item.workPlaning}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>BauKG:</h5>
                              <p className="text-muted">{item.safety}</p>
                              <br></br>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="d-flex justify-content-end">
                              <Link
                                to={
                                  "/update-day/" +
                                  item.projectNr +
                                  "/" +
                                  projectTitle +
                                  "/" +
                                  item._id
                                }
                              >
                                <Button
                                  className="p-1"
                                  size="lg"
                                  variant="primary"
                                >
                                  Bearbeiten
                                </Button>
                              </Link>
                              &nbsp;
                              <Button
                                className="p-1"
                                variant="primary"
                                size="lg"
                                onClick={() => handleDelete(item._id)}
                              >
                                Löschen
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
            </Accordion>

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={allDays.length}
              paginate={paginate}
            />

          </Form.Group>
        </Form>
      </div>
    </Container>
  )
};

export default DayList;
