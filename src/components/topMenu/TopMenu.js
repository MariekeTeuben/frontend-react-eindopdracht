import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from '../../assets/logo.png';
import './TopMenu.css';


function TopMenu() {
    const {isAuth, logout} = useContext(AuthContext);
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

                    {isAuth ?
                        <>
                        <span className="button-container">
                            <button
                                className="button-browse"
                                type="button"
                                onClick={() => history.push('/browse')}
                            >
                                Browse
                            </button>
                            <button
                                className="button-search"
                                type="button"
                                onClick={() => history.push('/search')}
                            >
                                Search
                            </button>
                            <button
                                className="button-favorites"
                                type="button"
                            >
                                Favorites
                            </button>
                           <button
                               className="button-logout"
                               type="button"
                               onClick={logout}
                           >
                               Log Out
                           </button>
                        </span>
                        </>
                        :
                        <span className="button-container">
                            <button
                                className="button-sign-in"
                                type="button"
                                onClick={() => history.push('/signin')}
                            >
                                Sign in
                            </button>
                            <button
                                className="button-sign-up"
                                type="button"
                                onClick={() => history.push('/signup')}
                            >
                                Sign up
                            </button>
                        </span>
                    }
                </nav>
            </div>
        </section>
    );
}

export default TopMenu;