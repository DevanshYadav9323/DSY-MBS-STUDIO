import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "../src/Components/Footer";
import ScrollToTop from './ScrollToTop';
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <Navbar /> */}
        <NavbarHook />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/media" element={<Media />} /> */}
            {/* Define other routes that you need*/}
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
