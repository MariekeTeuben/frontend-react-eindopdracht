import React from "react";
import './Favorite.css';

function Favorite({image, title}) {

    return (
        <article className="favorite-container">
            <img className="favorite-image" src={image} alt={title}/>
            <h2 className="favorite-title">{title}</h2>
        </article>
    );
}

export default Favorite;