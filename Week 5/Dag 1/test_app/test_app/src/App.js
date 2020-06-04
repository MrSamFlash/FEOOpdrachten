import React from "react";
// import { ReactComponent } from "*.svg";
// import Title from "./components/Title";
// import Joke from "./components/Joke";
// import Footer from "./components/Footer";
// import "./index.css";

// let App = () => {
//   return (
//     <div>
//       <Title />
//       <Joke
//         joke={{
//           question: "What lies on the bottom of the ocean and twitches?",
//           answer: "A nervous wreck!",
//         }}
//       />
//       <Joke
//         joke={{
//           question: "What is a horse's main reason to vote?",
//           answer: "It wants a stable economy!",
//         }}
//       />
//       <Joke
//         joke={{
//           oneliner:
//             "A skeleton walks into a doctor's office and the doctor says: 'You're a bit late!'",
//         }}
//       />
//       <Joke
//         joke={{
//           oneliner:
//             "My uncle is a reformed cleptomaniac. He only steals things that begin with an A. A car, a purse, a wallet...",
//         }}
//       />
//       <Footer />
//     </div>
//   );
// };

//Class practice
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <h1>
          You are currently logged {this.state.isLoggedIn ? "in" : "out"}! Well
          done.
        </h1>
      </div>
    );
  }
}

export default App;
