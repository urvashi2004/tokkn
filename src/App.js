import './App.css';
import './assets/fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/hover/cursor'

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './pages/navfoot/Navbar';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Login from './pages/Account/LogIn';
import Signup from './pages/Account/SignUp';
import About from './pages/About/About';
import Connect from './pages/Connect/Connect';
import Earn from './pages/Earn/Earn'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/connect" element={<Connect/>}/>
          <Route path="/earn" element={<Earn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
