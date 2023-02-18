import React, {useContext} from "react";
import {Link} from "react-router-dom";
import trail from '../../assets/trail.jpg';
import snow from '../../assets/national_park_snow.jpg';
import elk from '../../assets/elk.jpg';//
import Card from '../../components/card/Card';
import './Home.css';
import {AuthContext} from "../../context/AuthContext";


function HomePage() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <header className="header-home">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h1 className="title-homepage">Discover America's Nature: the National Parks</h1>
                    </div>
                </section>
            </header>
            <main>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <div className="call-to-action-container">
                            {isAuthenticated ?
                                <Link
                                    className="call-to-action"
                                    to="/browse"
                                >
                                    start your experience
                                </Link>
                            :
                                <Link
                                    className="call-to-action"
                                    to="/signup"
                                >
                                    start your experience
                                </Link>
                            }
                        </div>
                        <div className="app-info-container">
                            <Card
                                image={trail}
                                title="find a park"
                                description="Search by Name, State or Activity"
                            />
                            <Card
                                image={snow}
                                title="see all parks"
                                description="Get a list of all National Parks from A to Z"
                            />
                            <Card
                                image={elk}
                                title="get your personal favorites"
                                description="Bookmark the Parks you like"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="outer-content-container">
                <div className="inner-content-container">
                </div>
            </footer>
        </>
    );
}

export default HomePage;