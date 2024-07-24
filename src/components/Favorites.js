import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Favorites = () => {
    /* const { user } = useContext(UserContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (!user) return;

        const fetchFavorites = async () => {
            const response = await fetch(`http://localhost:5000/api/favorites/${user.id}`);
            const data = await response.json();
            setFavorites(data);
        };

        fetchFavorites();
    }, [user]);

    if (!user) {
        return <div>Please login to see your favorites</div>;
    } */

    return (
        <div className="favorites-list">
            <h2>Work in Progress :)</h2>
            {/* {favorites.map(fav => (
                <div key={fav.crypto_id} className="favorite-item">
                    <h3>Crypto ID: {fav.crypto_id}</h3>
                </div>
            ))} */}
        </div>
    );
};

export default Favorites;
