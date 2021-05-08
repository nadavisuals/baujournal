import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DayChooseProject from "./pages/day-choose-project";
import DayProjectDetails from "./pages/day-project-details";
import DayCreate from "./pages/day-create";
import DayUpdate from "./pages/day-update";
import ProjectList from "./pages/project-list";
import ProjectCreate from "./pages/project-create";
import ProjectUpdate from "./pages/project-update";


function App() {
  return (
    <Router>
      <div className="container">
      
        <Route path="/" exact component={DayChooseProject} />
        <Route path="/day-project-details/:projectNr/:projectTitle" exact component={DayProjectDetails} />
        <Route path="/day-create" exact component={DayCreate} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/create-project" component={ProjectCreate} />
        <Route path="/update-project/:id" component={ProjectUpdate} />
        <Route path="/update-day/:projectNr/:projectTitle/:id" component={DayUpdate} />

      </div>
    </Router>
  );
}

export default App;