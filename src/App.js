import logo from './logo.svg';
import './App.css';
import Mov from './mov.js';
import React from "react";
import MovieDetail from "./Detail.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from "./login.js";
import Watch from './watch.js';
import Sign from './Sign.js'
export function App() {
  return (
    <main>
      <BrowserRouter>
        <Route path="/" component={Mov} exact></Route>
        <Route path="/movie/:id" component={MovieDetail} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/watchlist" component={Watch} exact></Route>
        <Route path="/login/:user" component={Sign} exact></Route>
      </BrowserRouter>
    </main>
  );
}

export default App;