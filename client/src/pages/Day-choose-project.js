import React from "react";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import "../css/style.css";
import { Container } from "react-bootstrap";

const DayChooseProject = () => {

  return (
    <Container>

      <NavBar />
        <br />
      <div className="container content">
        <DropDown />
      </div>

      <div></div>

    </Container>
  );
};

export default DayChooseProject;
