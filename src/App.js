import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter,Link, Route } from "react-router-dom";

import Footer from './component/layouts/Footer.js'
import Index from './component/Index.js';
import Contact from './component/Contact.js';
import Projet from './component/Projet.js';




function App() {
  return (
    <div className="App">
      
      <HashRouter basename='/'>
      <header>
                <div id="header">
                    <nav className="navbar1">
                        <div className="container">

                            <Link to="/site/" className="navbar-brand">
                                Accueil
                            </Link>

                            <Link to="/projet" className="navbar-brand">
                                Projet
                            </Link>

                            <Link to="/contact" className="navbar-brand">
                                Contact
                            </Link>
                            
 
                        

    
                        </div>
                    </nav>
                </div>
                <br/>
                <br/>
                
            </header>
      <div>
        <Route exact path="/site/" component={Index} />
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
      </div>
      
      <Footer/>
      </HashRouter>
      
    </div>
  );
}

export default App;
