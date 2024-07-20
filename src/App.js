import './App.css';
import './assets/fonts/fonts.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Navbar from './pages/NavFoot/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
