/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
// import { responsiveFontSizes } from "@material-ui/core";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect( () => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcMqEzwY4JV8d").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });

    }

    // console.log("I HAVE A TOKEN", token);

  }, []);


  return (
    //BEM
    <div className="app"> 
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
