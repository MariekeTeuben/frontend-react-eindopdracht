import React, {useContext} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import Signup from "./pages/signup/SignUp";
import SignUpSuccessful from "./pages/signup-successful/SignUp-Successful";
import TopMenu from "./components/topMenu/TopMenu";
import AllParks from "./pages/allparks/AllParks";
import Search from "./pages/search/Search";
import ParkDetails from "./pages/parkdetails/ParkDetails";
import Favorites from "./pages/favorites/Favorites";
import {AuthContext} from "./context/AuthContext";
import './App.css';

function App() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <TopMenu/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup/>
                    </Route>
                    <Route exact path="/signup-successful">
                        <SignUpSuccessful/>
                    </Route>
                    <Route exact path="/signIn">
                        <SignIn/>
                    </Route>
                    <Route path="/allParks">
                        {isAuthenticated ? <AllParks/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/search">
                        {isAuthenticated ? <Search/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/parks/:parkCode">
                        {isAuthenticated ? <ParkDetails/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/favorites">
                        {isAuthenticated ? <Favorites/> : <Redirect to="/"/>}
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
