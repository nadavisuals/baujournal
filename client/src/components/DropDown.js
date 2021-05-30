import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import constants from "../constants/constants";
import { Form, Row, Col } from "react-bootstrap";
//
const DropDown = ({ nr, title }) => {
  const [allProjects, setAllProjects] = useState([]);
  const [projectNR, setprojectNR] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    setprojectNR(nr);
    setProjectTitle(title);
    axios
      .get(constants.backend_url + "/projects")
      .then((response) => {
        setAllProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[nr, title]);

 
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Choose Project
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {allProjects.map((item) => {
          return (
            <Link
              key={item._id}
              className="dropdown-item"
              onClick={() => {
                setprojectNR(item.projectNr);
                setProjectTitle(item.projectTitle);
              }}
              to={
                "/day-project-details/" + item.projectNr + "/" + item.projectTitle
              }
            >
              {item.projectNr}
              {"   "}
              {item.projectTitle}
            </Link>
          );
        })}
      </div>
      <div className="my-4">
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Project Nr.:
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={projectNR} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Project Title:
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={projectTitle} />
          </Col>
        </Form.Group>
      </div>
    </div>
  );
};

export default DropDown;
