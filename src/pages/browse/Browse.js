import React, { useState, useEffect } from "react";
import './Browse.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";


function Browse() {
    const [parkResults, setParkResults] = useState([]);
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [fullList, setFullList] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                setParkResults(result.data.data);
                setFullList(result.data.data); // Needed for search
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    function getByAlphabet(letter) {
        setParkResults(fullList.filter((park) => {
            return park.fullName.toLowerCase().startsWith(letter.toString().toLowerCase())
        }))
    };

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

                        <div>
                            {alphabet.length > 0 && alphabet.map((letter) => {
                                return <Button key={letter}
                                    type="button"
                                    className="button--character"
                                    clickHandler={() => getByAlphabet(`${letter}`)}
                                >
                                    {letter}
                                </Button>
                            })
                            }
                        </div>

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

