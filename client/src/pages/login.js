import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.token);
        Cookies.set("AuthToken", response.data.token);
        // const handleClickLogin = useCallback(() => {
          navigate("/");
        // }, [navigate]);
      }).catch(error => {
        // Handle error
        console.log("Wrong Credential");
      });
  };

  const handleGoBack = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button onClick={handleGoBack}>Go to Home</button>
    </div>
  );
};

export default Login;
