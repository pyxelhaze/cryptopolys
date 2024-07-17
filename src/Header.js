import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar">
            <h1>Cryptopolys</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cryptos">Your cryptos</Link>
            </div>
        </nav>
    );
}

export default Header;