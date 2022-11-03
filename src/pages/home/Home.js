import React from "react";
import trail from '../../assets/trail.jpg';
import manOnMountain from '../../assets/man_mountaintop.jpg';//
import elk from '../../assets/elk.jpg';//
import './Home.css';
import Card from "../../components/Card/Card";



function HomePage() {
    return (
        <>
        <header>
            <h1>Discover America's Nature: the National Parks</h1>
        </header>
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="app-info-container">
                        <Card
                            image={trail}
                            title="Find a park"
                            description="Search by name, state or activity to find your park"
                        />
                        <Card
                            image={manOnMountain}
                            title="See all parks"
                            description="Browse all parks from A to Z"
                        />
                        <Card
                            image={elk}
                            title="Get your personal favorites"
                            description="Bookmark the parks you like the most"
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