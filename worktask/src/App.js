import React, { Component } from "react";
import "./App.css";
import FetchBeer from "./components/fetchBeer/FetchBeer";
import FetchRandom from "./components/fetchRandom/FetchRandom";
import FetchByNameDate from "./components/fetchByNameDate/FetchByNameDate";
import Header from "./components/Header";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <FetchBeer/>
        <FetchByNameDate />
        <FetchRandom />
        
      </div>
    );
  }
}

export default App;