import React from "react";
import './Browse.css';
import axios from "axios";

function Browse() {
    async function fetchData() {
        try {
            const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="test">Dit wordt de browsen pagina</h1>
            <button
                type="button"
                onClick={fetchData}
                >
                Haal data op!
            </button>
        </>
    );
}

export default Browse;

