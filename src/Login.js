


const Login = () => {






    return (<form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Password (optional):</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Login</button>
    </form>);
}

export default Login;