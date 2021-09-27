import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="main-text">
        <h1 className="text main-h1">HarBest Market</h1>
        <p className="text main-p">
          Somos una plataforma que conecta restaurantes con agricultores para
          comprar frutas y hortalizas directamente de la huerta sin pasar por
          intermediarios. Ofrecemos un producto nacional a un precio justo,
          recolectado hace menos de 24h por agricultores con nombres y
          apellidos.
        </p>
        <Link className="common-button main-button" to="/products">
          Empezar
        </Link>
      </div>
    </div>
  );
};

export default Main;
