import React, { Component } from "react";
import Day from "./Day.js";

export default class Weeks extends Component {
  render() {
    let days = [];
    for (let i = 0; i < 6; i++) {
      const dayKey = "day" + i;
      days.push(
        <Day
          key={dayKey}
          day={this.props.day}
          dailyChallenge={this.props.dailyChallenge}
          events={this.props.events}
        />
      );
    }
    return <div>{days}</div>;
  }
}
