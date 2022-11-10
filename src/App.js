import React from "react";
import { Switch, Route,} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopMenu from "./components/TopMenu/TopMenu";
import './App.css';
import Browse from "./pages/browse/Browse";

function App() {
  return (
      <>
          <TopMenu />

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
            <Route path="/browse">
                <Browse />
            </Route>
        </Switch>
      </>
  );
}

export default App;
