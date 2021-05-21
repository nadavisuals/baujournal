import React, { useState, useEffect } from "react";
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
import Login from "./pages/login";
import UserContext from "./context/userContext";
import constants from "./constants/constants";
import Axios from "axios";


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        constants.backend_url+"/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log(tokenRes.data)
      if (tokenRes.data) {
        const userRes = await Axios.get(constants.backend_url+"/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
     };

    checkLoggedIn();
  }, []);




  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
      <div className="container">
        
        <Route path="/" exact component={Login} />
        <Route path="/day-choose-project" exact component={DayChooseProject} />
        <Route path="/day-project-details/:projectNr/:projectTitle" exact component={DayProjectDetails} />
        <Route path="/day-create/:projectNr/:projectTitle" exact component={DayCreate} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/create-project" component={ProjectCreate} />
        <Route path="/update-project/:projectNr/:projectTitle/:projectId" component={ProjectUpdate} />
        <Route path="/update-day/:projectNr/:projectTitle/:id" component={DayUpdate} />

      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;