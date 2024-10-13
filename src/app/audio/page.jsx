import React from "react";
import Player from "./Player";

const page = () => {
  return (
    <div className="min-h-screen mt-24 text-center">
      <h2 className="text-lg font-semibold">Audio Player</h2>
      <div className="my-8">
        <Player></Player>
        
      </div>
    </div>
  );
};

export default page;
