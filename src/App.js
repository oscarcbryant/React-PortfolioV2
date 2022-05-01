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
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
