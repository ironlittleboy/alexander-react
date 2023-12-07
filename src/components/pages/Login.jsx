import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../public/log.png";
import "./login.css";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("userdata")) {
      const { email, password } = JSON.parse(localStorage.getItem("userdata"));
      if (email === formData.email && password === formData.password) {
        toast.success("Inicio de sesión exitoso");
        navigate("/inventario");
      } else {
        toast.error("Datos incorrectos");
      }
    } else {
      toast.error("No hay registros de usuarios");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="logo" id="logo" />
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Acceder</NavLink>
          </li>
          <li>
            <NavLink to={"/inventario"}>Inventario</NavLink>
          </li>
        </ul>
      </header>
      <div className="form-container">
        <div className="form">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
          ¿No tienes una cuenta?{" "}
          <NavLink to={"/register"}>Regístrate</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
