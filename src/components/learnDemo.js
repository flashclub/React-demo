import React, { useState } from "react";
export default class LearnState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      list1: [1, 2, 3, 4],
      list2: [5, 6, 7, 8],
      list3: [7, 10, 7, 8],
      list4: [8, 9, 7, 8]
    };
  }
  tick() {
    this.setState(() => ({
      seconds: this.state.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>seconds:{this.state.seconds}</div>;
  }
}
