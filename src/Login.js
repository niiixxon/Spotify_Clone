  
import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;