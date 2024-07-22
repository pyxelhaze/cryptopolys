import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Header from './Header';
import Main from './Main';
import './index.css';
/* import Footer from './Footer'; */
import Coindetails from './Coindetails';
import Register from './Register';
import Login from './Login';



function App() {

  return (
    <UserProvider>
      < Router >
        <div className="app">
          <Header />
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
              {/*  <Route path="/logout"
              element={<Logout />}>
            </Route> */}
            </Routes>
          </div>

        </div>
        {/* <div className="footer">
        <Footer />
      </div> */}
      </Router >
    </UserProvider>

  );
}

export default App;
