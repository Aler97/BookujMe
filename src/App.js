import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Oglasi from './components/Oglasi';
import Oglas from './components/Oglas';
import Profil from './components/Profil';
import Reg from './Components/Registration.js'
import Login from './Components/Login'
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import { AuthContext } from './helpers/AuthContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/ONama' element={<AboutUs />}></Route>
          <Route path='/Kontakt' element={<Contact />}></Route>
          <Route path='/Oglasi' element={<Oglasi />}></Route>
          <Route path='/Oglasi/:id' element={<Oglas />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/Profil' element={<Profil />} />
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </AuthContext.Provider>
      <Footer />
    </Router>

  );
}

export default App;
