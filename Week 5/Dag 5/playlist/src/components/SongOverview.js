import React from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";

class SongOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
    this.baseState = this.state;
  }

  addSong = (song) => {
    this.setState((prevState) => {
      return {
        songs: prevState.songs.concat(song),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Spoofy</h1>
        <SongForm addSong={this.addSong} />
        <hr></hr>
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
