import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import LoginRegister from "./LoginRegister";

function App() {
  const [routechange, setRouteChange] = useState();
  // if (response === LoggedIn) {
  //   setRouteChange(LoggedIn)
  // } else (setRouteChange(LoginRegister))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
