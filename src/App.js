import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";

import Footer from './component/layouts/Footer.js'
import Navbar from './component/layouts/Header.js';
import Index from './component/Index.js';
import Contact from './component/Contact.js';
import Projet from './component/Projet.js';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <HashRouter basename='/'>
      <div>
        <Route exact path="#/" component={Index} />
        <Route path="#/projet" component={Projet} />
        <Route path="/#/contact" component={Contact} />
      </div>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
