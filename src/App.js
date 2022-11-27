import React, { useContext } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./pages/home/Home";
import Signin from "./pages/signin/SignIn";
import Signup from "./pages/signup/SignUp";
import TopMenu from "./components/TopMenu/TopMenu";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import ParkDetails from "./pages/parkdetails/ParkDetails";
import { AuthContext } from "./context/AuthContext";
import './App.css';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <TopMenu />
            <div className="content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/signin">
                    <Signin />
                </Route>
                <Route path="/browse">
                    {isAuth ? <Browse /> : <Redirect to="/" />}
                </Route>
                <Route path="/search">
                    {isAuth ? <Search /> : <Redirect to="/" />}
                </Route>
                <Route path="/parks/:parkCode">
                    {isAuth ? <ParkDetails /> : <Redirect to="/" />}
                </Route>
            </Switch>
            </div>
        </>
    );
}

export default App;
