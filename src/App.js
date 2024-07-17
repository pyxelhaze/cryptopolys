import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import './index.css';
import Footer from './Footer';




function App() {
  return (
    < Router >
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/"
              element={<Main />}>
            </Route>
          </Routes>
        </div>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router >


  );
}

export default App;
