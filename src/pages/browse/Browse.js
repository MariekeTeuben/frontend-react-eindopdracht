import React, { useState, useEffect } from "react";
import './Browse.css';
import axios from "axios";


function Browse() {
    const [parkCards, setParkCards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);
                setParkCards(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);



    return (
        <>
            <div>
                <h1 className="black">Dit wordt de browsen pagina</h1>

                <div>
                        <ul>
                            {parkCards.length > 0 && parkCards.map((parkCard) => {
                                return <li>
                                        {parkCard.fullName}
                                </li>
                                })
                            }
                        </ul>
                </div>
            </div>
        </>
    );
}

export default Browse;

