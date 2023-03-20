import React, {useEffect, useState} from "react";
import './Favorites.css';
import {Link} from "react-router-dom";
import Favorite from "../../components/favorite/Favorite";
import Button from "../../components/button/Button";

function Favorites() {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        function fetchFav() {
            try {
                const favorites = JSON.parse(localStorage.getItem('favorites'));
                if (favorites !== null) {
                    setFavorites([favorites]);
                }
            } catch (e) {
                console.error(e);
            }
        }

        fetchFav();
    }, []);


    function clearFav() {
        localStorage.removeItem('favorites');
        window.location.reload();
    }


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

                        {favorites.length < 1 &&
                            <>
                                <b>No favorites yet</b>
                                <p>You can bookmark a park by clicking the 'add to favorites' button on the park details
                                    page.</p>
                            </>
                        }

                        <div className="favorites-container">
                            {favorites.length > 0 && favorites[0].map((favorite) => {
                                return <Link key={favorite.id} to={`parks/${favorite.id}`}>
                                    <Favorite
                                        image={favorite.image}
                                        title={favorite.name}
                                    />
                                </Link>
                            })}
                        </div>

                        {favorites.length > 0 &&
                            <Button
                                type="button"
                                className="button"
                                clickHandler={clearFav}
                            >
                                Clear favorites
                            </Button>
                        }

                    </div>
                </section>
            </main>
        </>
    );
}

export default Favorites;

