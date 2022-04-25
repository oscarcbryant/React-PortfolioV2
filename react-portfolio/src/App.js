import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/contact';
// import Projects from './componenets/projects';
import About from './components/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} /> */}
      </Routes>
    </Router>
  );
}

export default App;
