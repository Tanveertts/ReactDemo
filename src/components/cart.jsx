import React, { Component } from "react";
import Counters from "./Counters";

class Cart extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counterlistItem) => {
    //console.log(counterlistItem - 1);
    const counter = [...this.state.counter];
    const index = counter.indexOf(counterlistItem);
    //const index = counterlistItem - 1
    // counter[index] = {...counterlistItem};
    counter[index].value++;
    this.setState({ counter });
  };

  handleDecrement = (counterlistItem) => {
    //console.log(counterlistItem - 1);
    const counter = [...this.state.counter];
    const index = counter.indexOf(counterlistItem);
    //const index = counterlistItem - 1
    // counter[index] = {...counterlistItem};
    counter[index].value--;
    this.setState({ counter });
  };

  handleDelete = (item) => {
    const counter = this.state.counter.filter(
      (countrItm) => countrItm.id !== item
    );
    this.setState({ counter });
    console.log(item);
  };
  handleReset = () => {
    console.log("handle reset");
    const counters = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log(counters);
  };
  render() {
    return (
      <Counters
        onDecrement={this.handleDecrement}
        counter={this.state.counter}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
      />
    );
  }
}

export default Cart;
