"use client";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ audioUrl }) => {
  return (
    <AudioPlayer
      className="border-none shadow-none"
      src={audioUrl}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default Player;
