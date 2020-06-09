import React from "react";

const Song = (props) => {
  return (
    <li>
      <span>Title: {props.song.title}</span>
      <br></br>
      <span>Artist: {props.song.artist}</span>
      <br></br>
      <span>Genre: {props.song.genre}</span>
      <br></br>
      <span>Rating: {props.song.rating}</span>
      <br></br>
    </li>
  );
};

export default Song;
