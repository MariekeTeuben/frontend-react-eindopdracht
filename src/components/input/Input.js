import React from "react";
import './Input.css';

function Input({ type, id, name, value, changeHandler }) {
    return (
        <input
            type={type}
            className="input"
            id={id}
            name={name}
            value={value}
            onChange={changeHandler}
        />
    );
}

export default Input;