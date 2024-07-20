import './App.css';
import './assets/fonts/fonts.css';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './pages/NavFoot/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Account/LogIn.page';
import Signup from './pages/Account/SignUp.page';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={Login}/>
          <Route path="signup" element={Signup}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
