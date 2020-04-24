import React, { Component } from "react";
import Event from "./Event.js";

export default class Day extends Component {
  render() {
    let events = [];
    for (let i = 0; i < 6; i++) {
      const eventKey = "event" + i;
      events.push(<Event key={eventKey} events={this.props.events} />);
    }
    return <div>{events}</div>;
  }
}
