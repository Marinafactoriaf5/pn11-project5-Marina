import React from 'react';
import './styles.css';
import Logo from '../assets/logo.png';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <img class="logo" src={Logo} alt="Decathlon logo" />
        <li><a href="#">Deportes</a></li>
        <li><a href="#">Mujer</a></li>
        <li><a href="#">Hombre</a></li>
        <li><a href="#">Infantil</a></li>
        <li><a href="#">Equipamiento</a></li>
        <li><a href="#">Nutrición y salud</a></li>
        <li><a href="#">Descuentos</a></li>
      </ul>
    </div>
  );
}
  
  export default Menu;