import React, {useState, useEffect} from 'react';
import states from '../../data/states.json';
import './SearchBar.css';
import axios from "axios";
import Button from "../button/Button";
import Input from "../input/Input";

function SearchBar({setNameHandler, setStateHandler, setActivityHandler}) {
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [activity, setActivity] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchActivities() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/activities?api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                setCategories(result.data.data);

                setNameHandler('');
                setStateHandler('');
                setActivityHandler('');

            } catch (e) {
                console.error(e);
            }
        }

        fetchActivities();
    }, []);


    function handleClick() {
        setNameHandler(name);
        setStateHandler(state);
        setActivityHandler(activity);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setNameHandler(name);
            setStateHandler(state);
            setActivityHandler(activity);
        }
    }


    return (
        <span className="searchbar">
            <div className="search-options">
                <label className="search-label" htmlFor="by-name">
                    By Name
                    <Input
                        type="text"
                        id="by-name"
                        value={name}
                        changeHandler={(e) => setName(e.target.value)}
                        keyHandler={keyPressCheck}
                    />
                </label>

                <label className="search-label" htmlFor="by-state">
                    By State
                    <select value={state} onChange={(e) => setState(e.target.value)}>
                        <option value=''>-</option>
                        {states.map((state) => (
                            <option key={state.id} value={state.abbreviation}>{state.name}</option>
                        ))}
                    </select>
                </label>

                <label className="search-label" htmlFor="by-activity">
                    By Activity
                    <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                        <option value=''>-</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="search-buttons">
                <Button
                    type="button"
                    className="button button--red"
                    clickHandler={handleClick}
                >
                    Search
                </Button>
            </div>
        </span>
    );
}

export default SearchBar;