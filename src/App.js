//import logo from './logo.svg';
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//import { Component, Fragment } from 'react/cjs/react.production.min';
import "./App.css";
//import Counters from './components/Counters';
import Movies from "./components/Movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Navbar from "./components/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AddNewMovie from "./components/addNewMovie";
//import { indexOf } from 'lodash';
//import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    genreIndex: 1,
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
      <React.Fragment>
        {/* <Navbar totalCounters={this.state.counter.filter(c => c.value > 0).length}/> */}

        <Navbar />
        <main className="container">
          {/* <Counters onDecrement={this.handleDecrement} counter={this.state.counter} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/> */}

          {/* <Movies/> */}
          <Switch>
            <Route path="/loginForm" component={LoginForm}></Route>
            <Route path="/registerForm" component={RegisterForm}></Route>
            <Route path="/movies/new" component={AddNewMovie}></Route>
            <Route path="/Movies/:id" component={MovieForm}></Route>
            <Route path="/Movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/Movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
