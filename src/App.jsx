/** @format */

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Ready", "Set", "Go"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.text !== "") {
      this.setState({
        list: [...this.state.list, this.state.text],
        text: "",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.setState({text: e.target.value})}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
