import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DayList from "./pages/day-list";
import ProjectList from "./pages/project-list";
import ProjectCreate from "./pages/project-create";
import ProjectUpdate from "./pages/project-update";


function App() {
  return (
    <Router>
      <div className="container">
        
        <Route path="/" exact component={DayList} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/create-project" component={ProjectCreate} />
        <Route path="/update-project/:id" component={ProjectUpdate} />

      </div>
    </Router>
  );
}

export default App;