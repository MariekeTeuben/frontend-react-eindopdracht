import React from "react";
import './Input.css';
import {Tooltip} from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

function Input({ type, id, value, changeHandler, keyHandler, toolTipContent }) {
    return (
        <>
        <input
            type={type}
            className="input"
            id={id}
            value={value}
            onChange={changeHandler}
            onKeyUp={keyHandler}
            data-tooltip-id="my-tooltip"
            data-tooltip-content= {toolTipContent}
            data-tooltip-place="right"
        />
            <Tooltip events={['click']} id="my-tooltip"/>
        </>
    );
}

export default Input;