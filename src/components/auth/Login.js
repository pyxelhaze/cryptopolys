import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const data = await response.json();
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            setMessage('Login successful');
        } else {
            setMessage('Login failed');
        }

    }

    const handleMessage = () => {
        setMessage('');
        navigate('/');
    };

    return (
        <div className="form">
            {message && (
                <div className="message-box">
                    <p>{message}</p>
                    <button onClick={handleMessage}>OK</button>
                </div>
            )}

            {!message && <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="username">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>

            </form>}
        </div>
    );
}

export default Login;
