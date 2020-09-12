import React from "react";
import PropTypes from "prop-types";
import "./Main.css";
import MainHeader from "../MainHeader/MainHeader";
import Card from "../Card/Card";
import LoginPage from "../LoginPage/LoginPage";

const Main = () => {
  return (
    <div className="Main">
      <MainHeader />
      <div className="content">Main Content</div>
    </div>
  );
};

export default Main;
