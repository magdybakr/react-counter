import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h2 className="text-center text-capitalize mt-5 mb-5">
          Hello react counter
        </h2>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
