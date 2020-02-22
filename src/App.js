import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="container center">
        <h3 className="teal-text text-darken-4">Weather Information</h3>
        <SearchBar />
      </div>
    );
  }
}

export default App;
