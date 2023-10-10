import React from "react";
import vid from '../icons_assets/rtvideo.mp4';

export default function Maintenance(props) {
    return (
        <div className='div-container'>
            <video src = {vid} autoPlay loop muted/>
            <h1> {props.name} Page is under Maintenance!</h1>
            <h4>We will be up shortly!</h4>
        </div>
    );
  }
