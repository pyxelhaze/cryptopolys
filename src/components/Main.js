
import Coinlist from './Coinlist';

const Main = () => {
    return (

        <div className="main">

            <div className="coinlistheader">

                <div className="rank">No</div>
                <div className="coin">Coin</div>
                <div className="change">24h</div>
                <div className="price">Price €</div>
                <div className="marketcap">MarketCap €</div>

            </div>
            <Coinlist />
            <div className="line"></div>
        </div>
    );
}

export default Main;