import React from "react";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      artist: " ",
      genre: " ",
      rating: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating,
    };
    this.props.addSong(song);
  };

  resetState = (e) => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <form>
        <div>
          <label>Song</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>Artist</label>
          <input
            name="artist"
            type="text"
            value={this.state.artist}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>Genre</label>
          <select
            name="genre"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option value="">Choose a genre!</option>
            <option value="Celtic Folk">Celtic Folk</option>
            <option value="Dark Cabaret">Dark Cabaret</option>
            <option value="Jazz">Jazz</option>
            <option value="Rock">Rock</option>
            <option value="Soundtrack">Soundtrack</option>
          </select>
        </div>
        <div>
          <label>Rating</label>
          <select
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          >
            <option value="">Rate the song!</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Add song!
        </button>
        <button onClick={this.resetState}>Clear playlist</button>
      </form>
    );
  }
}

export default SongForm;
