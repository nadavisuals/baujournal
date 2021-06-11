import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import "../css/style.css";

const DayChooseProject = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("auth-token") === "") {
      history.push("/");
    }
  }, [history]);

  return (
    <div>
      <NavBar />
      <br />
      <div className="container content">
        <h5>Baujournal</h5>
        <br />
        <DropDown />
      </div>
    </div>
  );
};

export default DayChooseProject;
