import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Oglasi from './Components/Oglasi';
import Oglas from './Components/Oglas';
import Profil from './Components/Profil';
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Components/NotFound';
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
