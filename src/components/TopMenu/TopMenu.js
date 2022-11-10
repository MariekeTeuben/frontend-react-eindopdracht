import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './TopMenu.css';


function TopMenu() {
    return (
       <section className="top-outer-content-container">
           <div className="inner-content-container">
               <nav>
                   <Link to="/">
                    <span className="logo-container">
                        <img src={logo} alt="logo"/>
                        <h5>
                        National Park Service
                        </h5>
                    </span>
                   </Link>
                   <span className="button-container">
                       <button
                           type="button">
                       Sign in
                   </button>
                   <button
                       type="button">
                       Sign up
                   </button>
                   </span>
               </nav>
           </div>
       </section>
    );
}

export default TopMenu;