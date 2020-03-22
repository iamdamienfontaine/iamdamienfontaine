import React from 'react';
import profilImage from '../img/profileImage.png'

class Index extends React.Component {

    render() {

        return(

            <div className="App">

            <h1>Mon site internet est encore en développement !</h1>  
            <h2>Auteur : Damien Fontaine - étudiant en informatique </h2>
            <img src={profilImage} alt="profil" width="150px" height="200px" />
            </div>

        );

    }

}

export default Index