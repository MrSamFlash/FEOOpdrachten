import React from "react";

let Joke = (props) => {
  return (
    <div className="joke">
      <h2>{props.joke.question}</h2>
      <p>{props.joke.answer}</p>
      <h3>{props.joke.oneliner}</h3>
    </div>
  );
};

export default Joke;
