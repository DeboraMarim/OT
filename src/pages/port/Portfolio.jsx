import React from 'react';
import "./Portfolio.css";
import img from './logoOT.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section>
      <div className="header">
        <img 
          src={img} 
          alt="Option Tech Logo" 
          className="logo" 
        />
        <h1 className="company-name">Option Tech</h1>
        <h2 className="page-title">Demonstrativos</h2>
      </div>

      <div className="button-container">
      <Link to="/" target="_blank" className="nav-button" id="btn1">Option Tech</Link>
        <a href="/petshop/petshop.html" target="_blank" className="nav-button" id="btn3">Pet Shop</a>
        <a href="/AutoEscola/autoEscola.html" target="_blank" className="nav-button" id="btn4">Auto Escola</a>
        <a href="/imobiliaria/index.html" target="_blank" className="nav-button" id="btn6">Imobiliaria</a>
        <a href="/streamer/index.html" target="_blank" className="nav-button" id="btn7">Streamer</a>
        <a href="/Barbearia/index.html" target="_blank" className="nav-button" id="btn5">Barbearia</a>
        <a href="/ConsultorioOdontologico/index.html" target="_blank" className="nav-button" id="btn8">Consultório Odontológico</a>
        <a href="/cargoMatch.html" target="_blank" className="nav-button" id="btn2">Cargo Match</a>
        <a href="/Advocacia/index.html" target="_blank" className="nav-button" id="btn9">Advocacia</a>
      </div>
    </section>
  );
};

export default Portfolio;
