import React from 'react';
import './Button.css';


function Button({ children, type, className, clickHandler, disabled }) {
    return (
        <button
            type={type}
            className={className}
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;


