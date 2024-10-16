"use client";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  return (
    <div className="max-w-96 mx-auto p-4 border my-8">
      <AudioPlayer
       className="w-full bg-gray-200 rounded-lg shadow-lg"
        autoPlay={false}
        src="https://p.scdn.co/mp3-preview/c8080e7c61e8a83df8cee7a59cc77f8b75d24cd5?cid=f6a40776580943a7bc5173125a1e8832%20thanks%20spotify"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
};

export default Player;
