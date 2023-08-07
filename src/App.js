import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyleNavbar from "./header/StyledNavbar" 
import Aboutus from "./routes/Aboutus";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Home from "./Home";
import Footer from './Footer';
import React from "react"
function App() {
  return (
    <div>
    <BrowserRouter>
      <StyleNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;