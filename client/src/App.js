import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DayList from "./pages/day-list";
import ProjectList from "./pages/project-list";
import ProjectCreate from "./pages/project-create";
import ProjectEdit from "./pages/project-edit";


function App() {
  return (
    <Router>
      <div className="container">
        
        <Route path="/" exact component={DayList} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/create" component={ProjectCreate} />
        <Route path="/edit/:id" component={ProjectEdit} />

      </div>
    </Router>
  );
}

export default App;