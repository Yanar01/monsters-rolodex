import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  // class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFelid: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchFelid: e.target.value });
    // this.setState({ searchFelid: e.target.value },() => console.log(this.state.searchFelid));
  };

  // handleChange(e) {
  //   this.setState({ searchFelid: e.target.value });
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchFelid } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFelid.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
