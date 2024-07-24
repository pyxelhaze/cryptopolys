
import Coinlist from './Coinlist';

const Main = () => {
    return (
        <div className="main">
            <div className="coinlistheader">
                <div className="rank">No</div>
                <div className="symbol">Coin</div>
                <div className="change">24h</div>
                <div className="price">Price €</div>
                <div className="marketcap">MarketCap €</div>
            </div>
            <Coinlist />
        </div>
    );
}

export default Main;