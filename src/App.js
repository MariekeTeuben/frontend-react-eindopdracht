import React from "react";
import { Switch, Route,} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navigation from "./components/Navigation";
import './App.css';

function App() {
  return (
      <>
          <Navigation />

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
      </>
  );
}

export default App;
