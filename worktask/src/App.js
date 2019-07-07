import React, { Component } from "react";
import "./App.css";
import FetchBeer from "./components/fetchBeer/FetchBeer";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchBeer />
      </div>
    );
  }
}

export default App;