import React from 'react';
import profilImage from '../img/profileImage.png'

class Index extends React.Component {

    render() {

        return(

            <div className="App">
            <br/>
            <h1>Mon site internet est encore en développement !</h1>  
            <br/>
            <h2>Auteur : Damien Fontaine - étudiant en informatique </h2>
            <br/>
            <br/>
            <img src={profilImage} alt="profil" width="150px" height="200px" />
            </div>

        );

    }

}

export default Index