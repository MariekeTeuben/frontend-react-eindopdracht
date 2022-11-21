import React, { useState, useEffect } from "react";
import './Browse.css';
import axios from "axios";
import {Link} from "react-router-dom";


function Browse() {
    const [parkResults, setParkResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);
                setParkResults(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);



    return (
        <>
            <header className="header-browse">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                    </div>
                </section>
            </header>
            <main>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h1>National Parks by Alphabet</h1>
                        <h2 className="browse-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h2>

                            <ul>
                                {parkResults.length > 0 && parkResults.map((parkResult) => {
                                    return <li key={parkResult.parkCode}>
                                        <Link to={`parks/${parkResult.parkCode}`}>
                                            {parkResult.fullName}
                                        </Link>
                                    </li>
                                })
                                }
                            </ul>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Browse;

