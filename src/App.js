import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from './component/layouts/Footer.js'
import Navbar from './component/layouts/Header.js';
import Index from './component/Index.js';
import Contact from './component/Contact.js';
import Projet from './component/Projet.js';




function App() {
  return (
    <div className="App">
      <Router>
        

        <Navbar/>
        <Switch>
          <Route exact path="/site" component={Index} />
          <Route exact path="/site/contact" component={Contact} />
          <Route exact path="/site/projet" component={Projet} />
        </Switch>
        <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
