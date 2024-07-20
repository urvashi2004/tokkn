import './App.css';
import './assets/fonts/fonts.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Navbar from './pages/NavFoot/Navbar';
import Home from './pages/Home/Home';
import Token from './pages/Token/Token';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/token" element={<Token/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
