import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../button/Button";
import logo from '../../assets/logo.png';
import './TopMenu.css';


function TopMenu() {
    const {isAuthenticated, logoutFunction} = useContext(AuthContext);
    const history = useHistory();

    return (
        <section className="top-outer-content-container">
            <div className="inner-content-container">
                <nav>
                    <Link to="/">
                    <span className="logo-container">
                        <img className="logo-image" src={logo} alt="logo"/>
                        <h5 className="logo-title">
                        National Park Service
                        </h5>
                    </span>
                    </Link>

                    {isAuthenticated ?
                        <>
                        <span className="button-container">
                            <Button
                                type="button"
                                className="button"
                                clickHandler={() => history.push('/allParks')}
                            >
                                All Parks
                            </Button>
                            <Button
                                type="button"
                                className="button"
                                clickHandler={() => history.push('/search')}
                            >
                                Search
                            </Button>
                            <Button
                                type="button"
                                className="button"
                                clickHandler={() => history.push('/favorites')}
                            >
                                Favorites
                            </Button>
                           <Button
                               type="button"
                               className="button button--red"
                               clickHandler={logoutFunction}
                           >
                               Log Out
                           </Button>
                        </span>
                        </>
                        :
                        <span className="button-container">
                            <Button
                                type="button"
                                className="button"
                                clickHandler={() => history.push('/signin')}
                            >
                                Sign in
                            </Button>
                            <Button
                                type="button"
                                className="button button--red"
                                clickHandler={() => history.push('/signup')}
                            >
                                Sign up
                            </Button>
                        </span>
                    }
                </nav>
            </div>
        </section>
    );
}

export default TopMenu;