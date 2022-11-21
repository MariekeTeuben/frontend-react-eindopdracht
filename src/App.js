import React from "react";
import { Switch, Route,} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import TopMenu from "./components/TopMenu/TopMenu";
import './App.css';
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import ParkDetails from "./pages/parkdetails/ParkDetails";

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
            <Route exact path="/signin">
                <Signin />
            </Route>
            <Route path="/browse">
                <Browse />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/parks/:parkCode">
                <ParkDetails />
            </Route>
        </Switch>
      </>
  );
}

export default App;
