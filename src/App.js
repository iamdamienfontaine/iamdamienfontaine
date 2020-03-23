import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";

import Footer from './component/layouts/Footer.js'
import Header from './component/layouts/Header.js';
import Index from './component/Index.js';
import Contact from './component/Contact.js';
import Projet from './component/Projet.js';




function App() {
  return (
    <div className="App">
      
      <HashRouter basename='/'>
      <Header/>

      <div>
        <Route exact path="/site/" component={Index} />
        <Route path="/site/projet" component={Projet} />
        <Route path="/site/contact" component={Contact} />
      </div>
      
      <Footer/>
      </HashRouter>
      
    </div>
  );
}

export default App;
