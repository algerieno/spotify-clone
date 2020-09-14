import React from "react";
import PropTypes from "prop-types";
import "./Main.css";
import MainHeader from "../MainHeader/MainHeader";
import Card from "../Card/Card";
import LoginPage from "../LoginPage/LoginPage";
import SongRow from "./SongRow/SongRow";

import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Main = () => {
  return (
    <div className="Main">
      <div className="mainHeader">
        <MainHeader />
      </div>

      <div className="content">
        <div className="banner">
          <img
            src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
            alt=""
          />

          <div className="header_album_info">
            <h4>PLAYLIST</h4>
            <h1>Discover Weekly</h1>
            <p>
              Your weekly mixtape of fresh music. Enjoy new music and deep cuts
              picked for you. Updates every Monday.
            </p>
          </div>
        </div>

        <div className="album_action_buttons">
          <PlayCircleFilledWhiteIcon
            className="big_play_button"
            style={{ color: "#1db954" }}
          />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>

        <hr className="album_divider" />

        <div className="ablum_playlist">
          {Array(10)
            .fill(0)
            .map((item) => (
              <SongRow key={Math.random()} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
