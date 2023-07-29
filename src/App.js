import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import StyleNavbar from "./header/StyledNavbar" 
import Aboutus from "./routes/Aboutus";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Home from "./Home";
import Footer from './Footer';
import Imagedynamic from './Imagedynamic';
function App() {
  return (
    <BrowserRouter>
      <StyleNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;