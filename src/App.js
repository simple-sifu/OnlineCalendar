import React, { Component } from "react";
import { render } from "react-dom";
import Calendar from "./js/Calendar.js";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "Hello Tommy",
    };
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.username}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://curriculum-api.codesmith.io/messages")
      .then((data) => data.json())
      .then((messages) => {
        console.log(messages);
        this.appendMessages(messages);
      });
  }

  // append data
  appendMessages(messages) {
    console.log(`appendMessages`);
    const messagesArray = [];
    for (let i = 0; i < messages.length; i++) {
      const message =
        messages[i].created_at.slice(0, -8).replace("T", " ") +
        " : [" +
        messages[i].created_by +
        "] - " +
        messages[i].message;
      messagesArray.push(message);
    }
    return messagesArray;
  }
}

render(<App />, document.querySelector("#root"));
