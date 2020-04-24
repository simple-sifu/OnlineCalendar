import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    const style = {
      display: "flex",
      justifyContent: "space-between",
    };
    const dayStyle = {
      border: "2px solid black",
      padding: "20px",
      width: "18%",
    };
    return (
      <div>
        <h1>Social Calendar</h1>
        <div style={style}>
          <div style={dayStyle}>Monday</div>
          <div style={dayStyle}>Tuesday</div>
          <div style={dayStyle}>Wednesday</div>
          <div style={dayStyle}>Thursday</div>
          <div style={dayStyle}>Friday</div>
          <div style={dayStyle}>Saturday</div>
        </div>
      </div>
    );
  }
}
