import React, { Component } from "react";

import SearchBar from "../container/SearchBar";
import WeatherList from "../container/WeatherList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
