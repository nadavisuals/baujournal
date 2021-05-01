import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ProjectList from "./pages/project-list";
import ProjectCreate from "./pages/project-create";
import ProjectEdit from "./pages/project-edit";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ProjectList} />
        <Route path="/create" component={ProjectCreate} />
        <Route path="/edit/:id" component={ProjectEdit} />

      </div>
    </Router>
  );
}

export default App;