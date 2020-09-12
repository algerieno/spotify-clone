import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import LoginPage from "./components/LoginPage/LoginPage";
import { getTokenFromUrl } from "./auth";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    _token ? setToken(_token) : console.log("authorization refused");
  }, []);

  return (
    <div className="outwrapper">
      {!token ? (
        <div className="unlogged">
          <LoginPage />
        </div>
      ) : (
        <div className="logged">
          <div className="App">
            <Navbar />
            <Main />
          </div>
          <div className="musicplayer">
            <span>music player</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
