import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';
import SearchBar from "../../components/SearchBar/SearchBar";
import {Link} from "react-router-dom";



function Search() {
    const [parkResults, setParkResults] = useState({});
    const [name, setName] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=50&q=${name}&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);
                setParkResults(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (name || state) {
            fetchData();
        }
    }, [name, state]);


return (
    <>
        <header className="header-search">
            <section className="outer-content-container">
                <div className="inner-content-container">
                </div>
            </section>
        </header>
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="search-options">
                    <h1>Find a Park</h1>
                    <SearchBar
                        setNameHandler={setName}
                        setStateHandler={setState}
                    />


                    </div>

                    <div className= "results-overview">
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
                </div>
            </section>
        </main>
    </>
);
}

export default Search;

