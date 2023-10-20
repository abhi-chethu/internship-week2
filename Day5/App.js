import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Functional from './Components/Functional';
// import Arrow from './Components/Arrow';
// import Cla from './Components/Cla';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </BrowserRouter>
        
        {/* <Functional/>
        <Arrow/>
        <Cla/> */}
      </>
  );
};

export default App;
