import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { formatMarketCap } from "../utilities";
import { getChangeClass } from "../utilities";

const Coinlist = () => {
    const { data: coins, error, isLoading } = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250&page=1');
    return (
        <div className="coinlist">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {coins && coins.length > 0 ? (
                coins.map(coin => (
                    <div key={coin.id} className="coinbox">
                        {/* <button onClick={() => handleFavorite(crypto.id)}>
                            {favorites.includes(crypto.id) ? "★" : "☆"}
                        </button> */}
                        <div className="rank">{coin.market_cap_rank}</div>
                        <Link to={`/coindetails/${coin.id}`}>
                            <div className="symbol">{coin.symbol.toUpperCase()}</div>
                        </Link>
                        <div className={`pricechange ${getChangeClass(coin.price_change_percentage_24h)}`}>
                            {coin.price_change_percentage_24h.toFixed(1)}%
                        </div>
                        <div className="price">{coin.current_price}</div>
                        <div className="marketcap">{formatMarketCap(coin.market_cap)}</div>

                    </div>
                ))
            ) : (
                !isLoading && <div>No data available</div>
            )}
            {/*  <button onClick={()} className="nextPage">More</button> */}

        </div>
    );
}

export default Coinlist;
