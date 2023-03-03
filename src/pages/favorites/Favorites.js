import React, {useEffect, useState} from "react";
import './Favorites.css';
import {Link} from "react-router-dom";

function Favorites() {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        function fetchFav() {
            try {
                const favorites = JSON.parse(localStorage.getItem('favorites'));
                setFavorites([favorites]);
            } catch (e) {
                console.error(e);
            }
        }

        fetchFav();
    }, []);

    console.log(favorites);

    return (
        <>
            <header className="header-favorites">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                    </div>
                </section>
            </header>
            <main>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h1>Favorites</h1>
                        <div className="favorites-container">
                            <ul>
                                {favorites.length > 0 && favorites[0].map((favorite) => {
                                    return <li key={favorite.id}>
                                        <Link to={`parks/${favorite.id}`}>
                                            {favorite.name}
                                        </Link>
                                    </li>
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Favorites;

