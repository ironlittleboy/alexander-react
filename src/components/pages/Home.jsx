import React from "react";
import "./home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }
  return (
    <div className="main">
      <div className="container-text">
        <h1>Gestion de inventario de la ULEAM</h1>
        <button onClick={handleClick}>Iniciar sesion o registrarse</button>
        <p>El inventario de equipos informáticos de la Universidad Laica Eloy Alfaro de Manabí es una detallada lista que registra todos los equipos tecnológicos utilizados en la institución. Este inventario incluye computadoras de escritorio, laptops, impresoras, proyectores, servidores, routers, switches, entre otros dispositivos utilizados para apoyar las actividades académicas y administrativas de la universidad.</p>
      </div>
    </div>
  );
};

export default Home;
