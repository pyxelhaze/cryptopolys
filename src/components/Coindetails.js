import React from "react";
import { useParams } from "react-router-dom";
import Coinchart from "./Coinchart";
import useFetch from "./useFetch";

const Coindetails = () => {
    const { id } = useParams();
    const { data: coin, error, isLoading } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    return (
        <div className="detail-container">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {coin && (
                <> <div className="price-chart">
                    <div className="coinname">{coin.id} ({coin.symbol.toUpperCase()})</div>
                    <div className="current-price">Current price: € {coin.market_data.current_price.eur}</div>
                    <Coinchart coinId={id} />
                </div>
                </>
            )}
        </div>
    );
}

export default Coindetails;
