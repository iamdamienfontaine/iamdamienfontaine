import React from 'react';
import profilImage from './img/profileImage.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mon site internet est encore en développement !</h1>  
      <h2>Auteur : Damien Fontaine - étudiant en informatique </h2>
      <p>Salut anne ! nous avons un problème avec le coro anne virus !!</p>
      <img src={profilImage} alt="profil" />
    </div>
  );
}

export default App;
