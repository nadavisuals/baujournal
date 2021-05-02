import React, { Component } from 'react';
import NavBar from "../components/navbar.component";

export default class DayList extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <br/>
        <p>You are on the Day List</p>
      </div>
    )
  }
}