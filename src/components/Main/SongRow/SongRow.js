import React from "react";
import "./SongRow.css";

function SongRow({ title, artist, duration }) {
  const getDuration = (timems) => {
    const mins = timems / 60000;
    const secs = Math.floor((timems - Math.floor(mins) * 60000) / 1000);
    return [Math.floor(mins), secs];
  };

  return (
    <div className="songRow">
      <div className="song_title">
        <div className="song_image">
          <img
            src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
            alt=""
          />
        </div>
        <div className="song_description">
          <h3>{title}</h3>
          <span className="song_artist">{artist}</span>
        </div>
      </div>

      {/* <div className="album_name">S.L.N Boys</div> */}
      <div className="song_time">{`${getDuration(duration)[0]}:${
        getDuration(duration)[1]
      }`}</div>
    </div>
  );
}

export default SongRow;
