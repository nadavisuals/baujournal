import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/userContext";
import DayChooseProject from "./pages/Day-choose-project";
import DayProjectDetails from "./pages/Day-project-details";
import DayCreate from "./pages/Day-create";
import DayUpdate from "./pages/Day-update";
import ProjectList from "./pages/Project-list";
import ProjectCreate from "./pages/Project-create";
import ProjectUpdate from "./pages/Project-update";
import Login from "./pages/Login";
import constants from "./constants/constants";
import "./css/style.css";

document.body.style = "background: #ebebeb;";

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
        constants.backend_url + "/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get(constants.backend_url + "/user/", {
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
        <Route path="/" exact component={Login} />
        <Route path="/day-choose-project" exact component={DayChooseProject} />
        <Route path="/day-project-details/:projectNr/:projectTitle" exact component={DayProjectDetails}/>
        <Route path="/day-create/:projectNr/:projectTitle" exact component={DayCreate}/>
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/create-project" exact component={ProjectCreate} />
        <Route path="/update-project/:projectNr/:projectTitle/:projectId" exact component={ProjectUpdate} />
        <Route path="/update-day/:projectNr/:projectTitle/:id" exact component={DayUpdate}/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
