import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';
import Resume from './components/resume'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/React-PortfolioV2/about' exact element={<About />} />
        <Route path='/React-PortfolioV2/contact' element={<Contact />} />
        <Route path='/React-PortfolioV2/projects' element={<Projects />} />
        <Route path='/React-PortfolioV2/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
