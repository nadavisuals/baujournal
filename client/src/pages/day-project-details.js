import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Accordion, Card, Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import axios from "axios";
import constants from "../constants/constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import Pagination from "../components/Pagination";
import Posts from "../components/Posts";


const DayList = (props) => {

  let { projectNr, projectTitle } = useParams();
  const [allDays, setAllDays] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {

//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get(constants.backend_url + "/days/");
//       setAllDays(res.data);
//       setLoading(false);
//     }
//     fetchPosts();  
//   }, []);
// console.log(allDays);


    axios
      .post(constants.backend_url + "/days/get-day/" + projectNr)
      .then((response) => {
        setAllDays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleDelete = (id) => {
    axios
      .delete(constants.backend_url + "/days/" + id)
      .then((res) => console.log(res.data));
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allDays.slice(indexOfFirstPost, indexOfLastPost);

  // const currentPosts = allDays.sort(function(a,b) {
  //   return new Date(a.date) - new Date(b.date);
  // }).slice(indexOfFirstPost, indexOfLastPost);
 

  // const currentPosts2 = allDays.slice(indexOfFirstPost, indexOfLastPost);

  // const currentPosts = currentPosts2.sort(function(a,b) {
  //   return new Date(a.date) - new Date(b.date);
  // });

  // const currentPosts2 = allDays.sort(function(a,b) {
  //   return new Date(b.date) - new Date(a.date);
  // });
  // const currentPosts = currentPosts2.slice(indexOfFirstPost, indexOfLastPost);


  // const currentPosts = allDays.slice(indexOfFirstPost, indexOfLastPost).sort(function(a,b) {
  //   return new Date(a.date) - new Date(b.date);
  // });
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const currentPosts = allDays.sort((a, b) => b.date - a.date);
 

    return (
      <Container>
          <NavBar />
          <br/>
         <div className="container content">
        <Form>
        <DropDown title={projectTitle} nr={projectNr} />
          

          <Form.Group>
          <Link to={"/day-create/" + projectNr + "/" + projectTitle}>
              <Button variant="dark">Neuen Tag erstellen</Button>
            </Link>
          </Form.Group>

          <Form.Group>
            <Accordion>
              {currentPosts
                .slice(0)
                .reverse()
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
                              <br></br>
                              <p className="text-muted">{item.timeFrom}</p>
                            </Col>
                            <Col>
                              <h5>Uhrzeit bis:</h5>
                              <br></br>
                              <p>{item.timeUntil}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Wetter:</h5>
                              <br></br>
                              <p className="text-muted">{item.weather}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Aussenemperatur C&#730;:</h5>
                              <br></br>
                              <p className="text-muted">{item.temperature}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Anwesende Firmen:</h5>
                              <br></br>
                              <p className="text-muted">{item.workers}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Stand der Arbeit:</h5>
                              <br></br>
                              <p className="text-muted">{item.workProgress}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>Organisatorisches</h5>
                              <br></br>
                              <p className="text-muted">{item.workPlaning}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5>BauKG:</h5>
                              <br></br>
                              <p className="text-muted">{item.safety}</p>
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
                                  variant="dark"
                                >
                                  Edit
                                </Button>
                              </Link>
                              &nbsp;
                              <Button
                                className="p-1"
                                variant="dark"
                                size="lg"
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
            </Accordion>

 {/* <Posts allDays={currentPosts} loading={loading} /> */}

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