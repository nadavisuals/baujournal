import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import axios from "axios";
import constants from "../constants/constants";
import 'bootstrap/dist/css/bootstrap.min.css';


const DayList = (props) => {
  let { projectNr, projectTitle } = useParams();
  const [allDays, setAllDays] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    axios
      .post(constants.backend_url + "/days/get-day/" + projectNr)
      .then((response) => {
        setAllDays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allDays.slice(indexOfFirstPost, indexOfLastPost);


    return (
      <div>
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
                                  "/edit-day/" +
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
                                onClick=""
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

          </Form.Group>
        </Form>
      </div>
      </div>
    )
  };

  export default DayList;





// import React, { Component } from 'react';
// import { Form, Row, Col, Button, Accordion, Card } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import NavBar from "../components/NavBar";


// export default class DayList extends Component {
//   render() {
//     return (
//       <div>
//           <NavBar />
//           <br/>
//          <div className="container content">
//         <Form>
//           <div>

//               <div class="dropdown">
//                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Project wählen..
//                 </button>
//                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <a class="dropdown-item" href="#">Sonne</a>
//                   <a class="dropdown-item" href="#">Regen</a>
//                   <a class="dropdown-item" href="#">Schnee</a>
//                 </div>
//               </div>

//         <br></br>

//         <div className="form-group"> 
//               <label><b>Projekt Nr:&nbsp;</b></label>
//               <label>MFH XYZ</label>
//         </div>

//          <div className="form-group"> 
//               <label><b>Projekt Titel:&nbsp;</b></label>
//               <label>MFH XYZ</label>
//         </div> 
//         <p></p>
//       </div>


//           <Form.Group>
//             <Link>
//               <Button variant="primary">Neuen Tag erstellen</Button>
//             </Link>
//           </Form.Group>

//           <Form.Group>
//             <Accordion>
//                     <Card>
//                       <Card.Header>
//                         <Accordion.Toggle
//                           as={Button}
//                           variant="link"
//                           eventKey="0"
//                         >
//                           11.05.2021
//                         </Accordion.Toggle>
//                       </Card.Header>

//                      <Accordion.Collapse eventKey="0">
//                         <Card.Body>
//                           <Row>
//                             <Col>
//                               <h5>Uhrzeit von:</h5>
//                               <p className="text-muted">12:00</p>
//                             </Col>
//                             <Col>
//                               <h5>Uhrzeit bis:</h5>
//                               <p>13:00</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>Wetter:</h5>
//                               <p className="text-muted">Regen</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>Aussenemperatur C&#730;:</h5>
//                               <p className="text-muted">18</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>Answesende Firmen:</h5>
//                               <p className="text-muted">Lorem Ipsum</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>Stand der Arbeit:</h5>
//                               <p className="text-muted">Lorem Ipsum</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>Organisatorisches:</h5>
//                               <p className="text-muted">Lorem Ipsum</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               <h5>BauKG:</h5>
//                               <p className="text-muted">Lorem Ipsum</p>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col className="d-flex justify-content-end">
//                               <Link
//                                 to={"/update-day/:id"}
//                               >
//                                 <Button
//                                   className="p-1"
//                                   size="lg"
//                                   variant="dark"
//                                 >
//                                   Bearbeiten
//                                 </Button>
//                               </Link>
//                               &nbsp;
//                               <Button
//                                 className="p-1"
//                                 variant="dark"
//                                 size="lg"
//                                 onClick=""
//                               >
//                                 Löschen
//                               </Button>
//                             </Col>
//                           </Row>
//                         </Card.Body>
//                       </Accordion.Collapse>
//                     </Card>
                  
                
//             </Accordion>


            

//           </Form.Group>
//         </Form>
//       </div>
//       </div>
//     )
//   }
// }