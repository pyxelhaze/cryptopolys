import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    console.log("Current user:", user);

    return (

        <nav className="navbar">
            <div className="navbar-content">
                <h1>Cryptopolys</h1>
                <div className="links">
                    {user ? (
                        <> <div className="loginlinks">
                            <div className="greeting">
                                <span >Hello, {user.username}</span>
                            </div>
                            <div className="linksafter">
                                <Link to="/">Home</Link>
                                {/*  <Link to="/favorites">Your favorites</Link> */}
                                <Link to="/" onClick={handleLogout}>Logout</Link>
                            </div>
                        </div>
                        </>
                    ) : (
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )} </div>
            </div>
        </nav>

    );
}

export default Header;