import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LoginRegister() {
  const [backendData, setBackendData] = useState([{}]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const [loginpassword, setLoginPassword] = useState("");
  const [loginusername, setLoginUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api").then((response) =>
      response.json().then((data) => {
        setBackendData(data);
      })
    );
  });
  const Login = async () => {
    try {
      await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginusername: loginusername,
          loginpassword: loginpassword,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async () => {
    try {
      const result = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: username,
          age: age,
          password: password,
        }),
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginLeft: "20px" }}>Users</h2>
      {backendData.map((person) => (
        <div style={{ textAlign: "left", marginLeft: "20px" }} key={person.id}>
          {person.username}
        </div>
      ))}
      <div style={{ marginTop: "-100px" }}>
        <h1>Register</h1>
        <input
          className="form-input"
          placeholder="Name"
          type="input"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="form-input"
          placeholder="Username"
          type="input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="form-input"
          placeholder="Age"
          type="input"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button className="form-button" onClick={postData}>
          Register
        </button>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1>Login</h1>
          <input
            className="form-input"
            placeholder="Username"
            type="input"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <br />
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <br />
          <button className="form-button" onClick={Login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
