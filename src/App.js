import './App.css';
import './assets/fonts/fonts.css';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './pages/NavFoot/Navbar';
import Home from './pages/Home/Home';
import Token from './pages/Token/Token';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/token" element={<Token/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
