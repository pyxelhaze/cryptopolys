
import Coinlist from './Coinlist';

const Main = () => {
    return (
        <div className="main-content">
            <div className="coinlistheader">
                <div className="headerrank">Rank</div>
                <div className="headercoin">Coin</div>
                <div className="headerpricechange">24h</div>
                <div className="headerprice">Price €</div>
                <div className="headermarketcap">MarketCap €</div>
            </div>
            <Coinlist />
        </div>
    );
}

export default Main;