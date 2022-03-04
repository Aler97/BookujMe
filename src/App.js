

import React, { useEffect, useState } from 'react';
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
import { UserIdContext } from './helpers/userIdContext';
import PostaviOglas from './Components/PostaviOglas';
import SinglePost from './Components/SinglePost';
import ScrollToTop from './helpers/ScrollToTop'
import TvojiOglasi from './Components/TvojiOglasi';
import TvojePonude from './Components/TvojePonude';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userId, setUserId] = useState('id');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setIsLoggedIn(token);
      setUserId(localStorage.getItem('id'));

    }
  }, [])


  return (

    <Router>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/o-nama' element={<AboutUs />}></Route>
              <Route path='/kontakt' element={<Contact />}></Route>
              <Route path='/prijavljivanje' element={<Login />}></Route>
              <Route path='/registracija' element={<Reg />}></Route>
              <Route path='/oglasi' element={<Oglasi />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path={`/profil/${userId}`} element={<Profil />} />
                <Route path={`/moji-oglasi/${userId}`} element={<TvojiOglasi />} />
                <Route path={`/moje-ponude/${userId}`} element={<TvojePonude />} />
                <Route path='/oglasi/:id' element={<SinglePost />}></Route>
                <Route path='/postavi-oglas' element={<PostaviOglas />} />
              </Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </ScrollToTop>
          <Footer />
        </AuthContext.Provider>
      </UserIdContext.Provider>
    </Router>


  );
}

export default App;
