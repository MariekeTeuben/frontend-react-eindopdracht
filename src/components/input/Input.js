import React from "react";
import './Input.css';


function Input({type, id, value, changeHandler, keyHandler}) {
    return (
        <input
            type={type}
            className="input"
            id={id}
            value={value}
            onChange={changeHandler}
            onKeyUp={keyHandler}
        />
    );
}

export default Input;