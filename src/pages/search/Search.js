import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';
import SearchBar from "../../components/searchBar/SearchBar";
import {Link} from "react-router-dom";



function Search() {
    const [parkResults, setParkResults] = useState({});
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [activity, setActivity] = useState('');

    useEffect(() => {
        async function fetchDataByName() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=50&q=${name}&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);

                setParkResults(result.data.data.filter((park)=>{
                    console.log(park.fullName)
                    return park.fullName.toLowerCase().includes(name.toLowerCase())
                }))

            } catch (e) {
                console.error(e);
            }

        }

        if (name) {
            fetchDataByName();
        }
    }, [name]);
;

    useEffect(() => {
        async function fetchDataByState() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=${state}&limit=50&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);

                setParkResults(result.data.data)

            } catch (e) {
                console.error(e);
            }

        }

        if (state) {
            fetchDataByState();
        }
    }, [state]);


    useEffect(() => {
        async function fetchDataByActivity() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=${activity}&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);

                setParkResults(result.data.data[0].parks);

            } catch (e) {
                console.error(e);
            }

        }

        if (activity) {
            fetchDataByActivity();
        }
    }, [activity]);



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
                    <h1>Find a Park</h1>
                    <div className="search-container">
                        <SearchBar
                            setNameHandler={setName}
                            setStateHandler={setState}
                            setActivityHandler={setActivity}
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

