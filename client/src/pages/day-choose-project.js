import React, { Component } from 'react';
import DropDown from "../components/DropDown";
import NavBar from "../components/navbar.component";

export default class DayChooseProject extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DropDown />
      </div>


    )
  }
}