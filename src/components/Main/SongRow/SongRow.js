import React from "react";
import "./SongRow.css";

function SongRow({ title, artist, duration, img }) {
  const getDuration = (timems) => {
    const mins = timems / 60000;
    const secs = Math.floor((timems - Math.floor(mins) * 60000) / 1000);
    return [Math.floor(mins), secs];
  };

  return (
    <div className="songRow">
      <div className="song_title">
        <div className="song_image">
          <img src={img} alt="" />
        </div>
        <div className="song_description">
          <h3>{title}</h3>
          <span className="song_artist">{artist}</span>
        </div>
      </div>

      {/* <div className="album_name">S.L.N Boys</div> */}
      <div className="song_time">{`${getDuration(duration)[0]}:${
        getDuration(duration)[1] < 10
          ? `0${getDuration(duration)[1]}`
          : getDuration(duration)[1]
      }`}</div>
    </div>
  );
}

export default SongRow;
