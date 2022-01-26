//import logo from './logo.svg';
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//import { Component, Fragment } from 'react/cjs/react.production.min';
import "./App.css";
import Movies from "./components/Movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Navbar from "./components/navbar";
//import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AddNewMovie from "./components/addNewMovie";
import Cart from "./components/cart";
//import { indexOf } from 'lodash';
//import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    genreIndex: 1,
  };

  render() {
    return (
      <React.Fragment>
        {/* <Navbar totalCounters={this.state.counter.filter(c => c.value > 0).length}/> */}

        <Navbar />
        <main className="container">
          {/* <Movies/> */}
          <Switch>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/loginForm" component={LoginForm}></Route>
            <Route path="/registerForm" component={RegisterForm}></Route>
            {/* <Route path="/movies/new" component={AddNewMovie}></Route> */}
            <Route path="/Movies/:id" component={AddNewMovie}></Route>
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
