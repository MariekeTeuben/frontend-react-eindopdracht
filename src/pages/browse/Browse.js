import React, { useState } from "react";
import './Browse.css';
import axios from "axios";

function Browse() {
    const [parkCards, setParkCards] = useState({});

        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data);
                setParkCards(result.data);
            } catch (e) {
                console.error(e);
            }
        }

    return (
        <>
            <div>
                <h1 className="black">Dit wordt de browsen pagina</h1>
                <button
                    type="button"
                    onClick={fetchData}
                    >
                Haal data op!
                </button>
                <div>
                    {Object.keys(parkCards).length > 0 &&
                    <>
                        <img src={parkCards.data[0].images[0].url} alt="foto"/>
                        <h2>{parkCards.data[0].fullName}</h2>
                        <h4>{parkCards.data[0].description}</h4>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default Browse;

