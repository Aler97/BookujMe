

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Oglasi from './Components/Oglasi';
import Profil from './Components/Profil';
import Reg from './Components/Registration.js'
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Components/NotFound';
import { AuthContext } from './helpers/AuthContext';
import PostaviOglas from './Components/PostaviOglas';
import SinglePost from './Components/SinglePost';
import ScrollToTop from './helpers/ScrollToTop'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (

    <Router>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/ONama' element={<AboutUs />}></Route>
            <Route path='/Kontakt' element={<Contact />}></Route>
            <Route path='/Prijavljivanje' element={<Login />}></Route>
            <Route path='/Registracija' element={<Reg />}></Route>
            <Route path='/Oglasi' element={<Oglasi />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path='/Profil' element={<Profil />} />
              <Route path='/Oglasi/:id' element={<SinglePost />}></Route>
              <Route path='/PostaviOglas' element={<PostaviOglas />} />
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </ScrollToTop>
      </AuthContext.Provider>
      <Footer />
    </Router>


  );
}

export default App;
