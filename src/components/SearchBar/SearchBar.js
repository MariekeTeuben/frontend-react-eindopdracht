import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setNameHandler, setStateHandler }) {
    const [name, setName] = useState('');
    const [state, setState] = useState('');

    const options = [
        {
            label: "State",
            value: "state",
        },
        {
            label: "Alabama",
            value: "alabama",
        },
        {
            label: "Alaska",
            value: "alaska",
        },
        {
            label: "Arizona",
            value: "arizona",
        },
    ];

    function handleClick() {
        setNameHandler(name);
        setStateHandler(state);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setNameHandler(name);
            setStateHandler(state);
        }
    }

    return (
        <span className="searchbar">
            <input
                type="text"
                name="search"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={keyPressCheck}
                placeholder="Name"
            />

            <select value={state} onChange={(e) => setState(e.target.value)}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
          </select>

      <button
          type="button"
          onClick={handleClick}
      >
        Search
      </button>
        </span>
    );
}

export default SearchBar;