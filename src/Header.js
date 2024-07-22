import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
    };

    console.log("Current user:", user);

    return (
        <nav className="navbar">
            <h1>Cryptopolys</h1>
            <div className="links">
                {user ? (
                    <>
                        <Link to="/">Home</Link>
                        <span className="greeting">Hello, {user.username}</span>
                        <Link to="/favorites">Your cryptos</Link>
                        <button className="logout" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )} </div>

        </nav>
    );
}

export default Header;