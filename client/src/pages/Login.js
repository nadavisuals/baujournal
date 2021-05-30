import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../context/userContext";
import ErrorNotice from "../components/ErrorNotice";
import constants from "../constants/constants"
import "../css/style.css";

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        constants.backend_url + "/user/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/day-choose-project");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <div className="container">
        <Form
          style={{
            maxWidth: "400px",
            marginTop: "60px",
            backgroundColor: " #fff",
            padding: "50px",
          }}
          className="text-center container"
        >
          <Form.Group>
            <h2>PITBAUjOURNAL</h2>
            {error && (
              <ErrorNotice
                message={error}
                clearError={() => setError(undefined)}
              />
            )}
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Benutzer</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Benutzername.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Passwort</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Passwort.."
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => submit(e)}>Login</Button>

        </Form>
      </div>
    </div>
  );
};
