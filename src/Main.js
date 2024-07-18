import useFetch from "./useFetch";
import Coinlist from './Coinlist';

const Main = () => {
    return (
        <div className="main-content">
            <h2>Coins</h2>
            <Coinlist />
        </div>
    );
}

export default Main;