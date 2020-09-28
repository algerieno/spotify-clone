import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import LoginPage from "./components/LoginPage/LoginPage";
import { getTokenFromUrl } from "./auth";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./utils/DataLayer";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

export const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlist, album }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    //_token = token;
    if (_token) {
      console.log(_token);
      dispatch({
        type: "SET_TOKEN",
        payload: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //console.log(user);
        if (user.images[0]) {
          dispatch({
            type: "SET_IMAGE",
            payload: user.images[0].url,
          });
        }

        dispatch({
          type: "SET_USER",
          payload: user.display_name,
        });
      });
      spotify.getUserPlaylists().then((result) => {
        dispatch({
          type: "SET_PLAYLIST",
          payload: result.items.map((item) => item.name),
        });
      });

      spotify.getAlbum("3HNnxK7NgLXbDoxRZxNWiR").then((response) => {
        dispatch({
          type: "SET_ALBUM",
          payload: response,
        });
      });
    }
    // spotify.play({
    //   context_uri: `spotify:playlist:37i9dQZF1E4ppGtqqkuRvH`,
    // });

    spotify.getMyDevices().then((r) => console.log(r));
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
            <MusicPlayer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
