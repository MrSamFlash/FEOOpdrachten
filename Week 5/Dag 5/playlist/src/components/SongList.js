import React from "react";
import Song from "./Song";

function SongList(props) {
  const songsForList = props.songs.map((song) => (
    <Song key={song.id} song={song} />
  ));
  return (
    <div>
      <ul>{songsForList}</ul>
    </div>
  );
}

export default SongList;
