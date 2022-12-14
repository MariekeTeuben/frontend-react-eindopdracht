import React from "react";
import './Card.css';

function Card({image, title, description}) {

    return (
        <article>
            <img className="card-image" src={image} alt={title}/>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </article>
    );
}

export default Card;
