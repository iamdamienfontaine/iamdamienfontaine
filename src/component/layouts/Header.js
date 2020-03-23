import React, { Component } from 'react'

import { Link } from "react-router-dom";

class Header extends Component{
    

    render(){

        return (
            
            <header>
                <div id="header">

                        
                  
                     

                    <nav className="navbar1">
                        <div className="container">
                            <Link to="/site/" className="navbar-brand1">
                                Accueil
                            </Link>
                        
                            <Link to="/site/contact" className="navbar-brand">
                                Contact
                            </Link>
                            <Link to="/site/projet" className="navbar-brand">
                                Projet
                            </Link>
                            <Link to="/site/" className="navbar-brand">
                                Accueil
                            </Link>
                        </div>
                    </nav>
                </div>
                <br/>
                <br/>
                
            </header>
        );

    }

}

export default Header
