import React, {useContext} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import Signup from "./pages/signup/SignUp";
import TopMenu from "./components/topMenu/TopMenu";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import ParkDetails from "./pages/parkdetails/ParkDetails";
import {AuthContext} from "./context/AuthContext";
import './App.css';

function App() {
    const {auth} = useContext(AuthContext);

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
                    <Route exact path="/signIn">
                        <SignIn/>
                    </Route>
                    <Route path="/browse">
                        {auth.isAuth ? <Browse/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/search">
                        {auth.isAuth ? <Search/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/parks/:parkCode">
                        {auth.isAuth ? <ParkDetails/> : <Redirect to="/"/>}
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
