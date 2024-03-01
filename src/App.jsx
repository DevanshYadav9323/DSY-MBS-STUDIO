import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "../src/Components/Footer";
import ScrollToTop from './ScrollToTop';
import About from "./pages/About";
import Media from "./pages/Media";
import Purchase from "./pages/Purchase";
import MobileAlert from "./MobileAlert";

const App = () => {
  return (
    <>
      <Router>
        <MobileAlert />
        <ScrollToTop />
        <NavbarHook />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/purchase" element={<Purchase />} />
            {/* Define other routes that you need*/}
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
