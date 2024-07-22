import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            setMessage('User registered successfully');
        } else {
            setMessage('Registration failed');
        }
    };
    const handleMessage = () => {
        setMessage('');
        navigate('/login');
    };

    return (<div className="form">
        {message && (
            <div className="message-box">
                <p>{message}</p>
                <button onClick={handleMessage}>OK</button>
            </div>
        )}

        {!message && (<form onSubmit={handleSubmit}>
            <h2>Register</h2>
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
            <button type="submit">Register</button>
        </form>)}
    </div >
    );
}
export default Register;