import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kings } from "./kings";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kings: kings,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    console.log(event.target.value);
  };
  render() {
    const filterKings = this.state.kings.filter((king) => {
      return king.Name.toLowerCase().includes(
        this.state.searchfield.toLowerCase()
      );
    });
    return (
      <div className="tc">
        <h1 className="f1">FixedKings</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList kings={filterKings} />
        </Scroll>
      </div>
    );
  }
}

export default App;
