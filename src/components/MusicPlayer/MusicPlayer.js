import React, { useEffect, useState } from "react";
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
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

import { useDataLayerValue } from "../../utils/DataLayer";

const MusicPlayer = () => {
  const [{ album }] = useDataLayerValue();
  const albumName = album?.name;
  const songName = album?.tracks.items[1].name;
  const albumImg = album?.images[2].url;
  const [playing, setPlaying] = useState(false);

  spotify.getMyCurrentPlaybackState().then((r) => setPlaying(r.is_playing));

  return (
    <div className="MusicPlayer">
      <div className="footer_left">
        <div className="album_logo">
          <img src={albumImg} alt="" />
        </div>
        <div className="album_info">
          <h5>{albumName}</h5>
          <p>{songName}</p>
        </div>
      </div>
      <div className="footer_center">
        <div className="center_icons">
          <ShuffleOutlinedIcon className="green_icon" />
          <SkipPreviousOutlinedIcon />
          {!playing ? (
            <PlayCircleOutlineOutlinedIcon
              fontSize="large"
              onClick={() => {
                spotify.play();
                setPlaying(true);
              }}
            />
          ) : (
            <PauseCircleOutlineIcon
              fontSize="large"
              onClick={() => {
                spotify.pause();
                setPlaying(false);
              }}
            />
          )}

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
};

export default MusicPlayer;
