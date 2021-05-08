import React from "react";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";

const DayChooseProject = () => {

  return (
    <div>
      <NavBar />
      <div className="container content">
        <DropDown/>
      </div>

      <div></div>
    </div>
  );
};

export default DayChooseProject;