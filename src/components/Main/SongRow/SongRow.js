import React from "react";
import "./SongRow.css";

function SongRow() {
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
          <h3>Song Title</h3>
          <span className="song_artist">Artist</span>
        </div>
      </div>

      <div className="album_name">S.L.N Boys</div>
      <div className="song_time">2:09</div>
    </div>
  );
}

export default SongRow;
