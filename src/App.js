import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
      </Router>

  );
}

export default App;
