import React, { Component } from "react";
import "./App.css";
import FetchBeer from "./components/fetchBeer/FetchBeer";
import FetchRandom from "./components/fetchRandom/FetchRandom";
import FetchByNameDate from "./components/fetchByNameDate/FetchByNameDate"

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchByNameDate />
      </div>
    );
  }
}

export default App;