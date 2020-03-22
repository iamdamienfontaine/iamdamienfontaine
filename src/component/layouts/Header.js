import React, { Component } from 'react'

import { Link } from "react-router-dom";

class Header extends Component{
    

    render(){

        return (
            <header>
                <div id="header">
                    <nav className="navbar1">
                        <div className="container">

                            <Link to="/" className="navbar-brand">
                                Accueil
                            </Link>

                            <Link to="/projet" className="navbar-brand">
                                Projets
                            </Link>

                            <Link to="/contact" className="navbar-brand">
                                Contact
                            </Link>

                        

    
                        </div>
                    </nav>
                </div>
                
            </header>
        );

    }

}

export default Header
