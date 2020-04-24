import React, { Component } from "react";
import { render } from "react-dom";
import Calendar from "./js/Calendar.js";
import Week from "./js/Week.js";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      calendar: [],
    };
  }

  render() {
    let weeks = [];
    const cal = this.state.calendar.slice();

    console.log(`RENDER ****** calendar = ${JSON.stringify(cal)}`);

    const weeksArray = cal.reduce((acc, currObj) => {
      const weekIndex = Number.parseInt(currObj.week);
      console.log(
        `weekIndex = ${weekIndex}, currObj = ${JSON.stringify(currObj)}`
      );
      console.log(`acc = ${JSON.stringify(acc)}`);
      if (acc[weekIndex] == undefined) {
        acc[weekIndex] = [currObj];
      } else {
        acc[weekIndex].push(currObj);
      }

      return acc;
    }, []);

    console.log(JSON.stringify(weeksArray));

    for (let i = 1; i < weeksArray.length; i++) {
      const week = weeksArray[i];
      weeks.push(
        <Week
          key={i}
          day={cal[i].day}
          dailyChallenge={cal[i].challenge}
          events={cal[i].goals}
        />
      );
    }
    return (
      <div>
        <Calendar />
      </div>
    );
    //         {weeks}
  }

  componentDidMount() {
    console.log("********* componentDidMount **************");
    fetch("https://curriculum-api.codesmith.io/messages")
      // fetch("http://slack-server.elasticbeanstalk.com/calendar/NY/18/")
      .then((data) => data.json())
      .then((messages) => {
        console.log(messages);
        this.appendMessages(messages);
    });

  //   const xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       // get a JSON object from the response text body which should be urls
  //       const json = JSON.parse(this.responseText);
  //       // set state based on our json object
  //       // ourComponent.setState({ urls: json });
  //       console.log(`json = ${JSON.stringify(json)}`);
  //     }
  //   };
  //   xhttp.open(
  //     "GET",
  //     "http://slack-server.elasticbeanstalk.com/calendar/NY/18/"
  //   ); // starts the creating of the request
  //   xhttp.setRequestHeader("Access-Control-Allow-Origin", "*"); // this header set fixes CORS error
  //   xhttp.send(); // sends request
  // }

  // For now since Calendar NY 18 is down will use hardcoded data to test.
  appendMessages(messages) {
    const calMessages = [];
    let calObj = {
      week: 1,
      day: "Monday",
      unit: 1,
      challenge: "JS fundamentals",
      goals: ["Complete js-fundamental Challenge"],
    };
    calMessages.push(calObj);
    calObj = {
      week: 2,
      day: "Monday",
      unit: 2,
      challenge: "Data Structures",
      goals: [
        "Reimplemtn the following data strucutures: Linked Link, graph, hash table, tree, binary search tree",
      ],
    };
    calMessages.push(calObj);
    calObj = {
      week: 2,
      day: "Tuesday",
      unit: 3,
      challenge: "Algorithms",
      goals: ["Complete coin sum", "Complete n-paths"],
    };
    calMessages.push(calObj);
    calObj = {
      week: 3,
      unit: 4,
      day: "Monday",
      challenge: "Frontend Fundamentals",
      goals: ["Complete"],
    };
    calMessages.push(calObj);
    calObj = {
      week: 3,
      unit: 5,
      day: "Wednesday",
      challenge: "Ajax",
      goals: ["Connect calendar to google API", "Create Chatroom"],
    };
    calMessages.push(calObj);
    calObj = {
      week: 3,
      unit: 6,
      day: "Friday",
      challenge: "React",
      goals: ["Create tic tac toe", "Reactify frontend code"],
    };
    calMessages.push(calObj);
    console.log(
      `************* appendMessages - ${JSON.stringify(calMessages)}`
    );
    this.setState({ calendar: calMessages });
    return calMessages;
  }
}

render(<App />, document.querySelector("#root"));
