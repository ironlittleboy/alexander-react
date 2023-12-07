import React from "react";
import "./home.css"
import { useNavigate } from "react-router-dom";
const principal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }
  return (
    <div className="main">
      <div className="container-text">
        <h1>Gestion de inventario de la ULEAM</h1>
        <button onClick={handleClick}>Iniciar sesion o registrarse</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores dicta quae dolorem doloribus, provident delectus nobis odit vel autem ducimus soluta qui tempora nostrum animi accusantium architecto quaerat consequatur.</p>
      </div>
    </div>
  );
};

export default principal;