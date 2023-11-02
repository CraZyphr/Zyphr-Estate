import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import SignUp from './SignUp';
import About from './About';
import Profile from './Profile';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
