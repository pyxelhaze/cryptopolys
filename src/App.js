import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import Coindetails from './components/Coindetails';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Favorites from './components/Favorites';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      < Router >
        <div className="app">
          <Header />
          <div className="line"></div>
          <div className="main-content">
            <Routes>
              <Route path="/"
                element={<Main />}>
              </Route>
              <Route path="/coindetails/:id"
                element={<Coindetails />}>
              </Route>
              <Route path="/register"
                element={<Register />}>
              </Route>
              <Route path="/login"
                element={<Login />}>
              </Route>
              <Route path="/favorites"
                element={<Favorites />}>
              </Route>
            </Routes>
          </div>
          <div className="line"></div>
          <Footer />
        </div>

      </Router >
    </UserContext.Provider>

  );
}

export default App;
