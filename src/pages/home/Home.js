import React from "react";
import trail from '../../assets/trail.jpg';
import snow from '../../assets/national_park_snow.jpg';
import elk from '../../assets/elk.jpg';//
import './Home.css';
import Card from "../../components/Card/Card";


function HomePage() {
    return (
        <>
        <header>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>Discover America's Nature: the National Parks</h1>
                </div>
            </section>
        </header>
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="call-to-action-container">
                        <button type="button">
                            Start your experience
                        </button>
                    </div>
                    <div className="app-info-container">
                        <Card
                            image={trail}
                            title="Find a park"
                            description="Search by name, state or activity"
                        />
                        <Card
                            image={snow}
                            title="See all parks"
                            description="Browse National Parks from A to Z"
                        />
                        <Card
                            image={elk}
                            title="Get your personal favorites"
                            description="Bookmark the parks you like"
                        />
                    </div>
                </div>
            </section>
        </main>
        <footer>
        </footer>
        </>
    );
}

export default HomePage;