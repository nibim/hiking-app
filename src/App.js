import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import { AuthContext } from './utils/Authcontext';
import { useState } from 'react';
import Account from './pages/Account';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Account" element={<Account />}/>
          </Route>
        </Routes>
      </BrowserRouter> 
      </AuthContext.Provider>
    </div>
  );
}

export default App;
