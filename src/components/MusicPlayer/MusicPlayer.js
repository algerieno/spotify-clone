import React from "react";
import PropTypes from "prop-types";
import "./MusicPlayer.css";
import { spotify } from "../../App";

import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import PlaylistPlayOutlinedIcon from "@material-ui/icons/PlaylistPlayOutlined";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const MusicPlayer = () => (
  <div className="MusicPlayer">
    <div className="footer_left">
      <div className="album_logo">
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt=""
        />
      </div>
      <div className="album_info">
        <h5>Album name</h5>
        <p>song name</p>
      </div>
    </div>
    <div className="footer_center">
      <div className="center_icons">
        <ShuffleOutlinedIcon className="green_icon" />
        <SkipPreviousOutlinedIcon />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          onClick={() => spotify.play()}
        />
        <SkipNextOutlinedIcon />
        <RepeatOutlinedIcon className="green_icon" />
      </div>
    </div>
    <div className="footer_right">
      <div className="right_icons">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeUpOutlinedIcon className="right_icon" />
          </Grid>
          <Grid item>
            <PlaylistPlayOutlinedIcon className="right_icon" />
          </Grid>
          <Grid item xs>
            <Slider className="green_icon" />
          </Grid>
        </Grid>
      </div>
    </div>
  </div>
);

export default MusicPlayer;
