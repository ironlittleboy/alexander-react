import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../../public/log.png";
import toast from 'react-hot-toast';
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
    } else {
      localStorage.setItem("userdata", JSON.stringify(formData));
      toast.success("Registro completado");
    }
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }
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
          <h1>Registrate</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="">Nombres</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div>
              <label htmlFor="">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>
            <button type='submit'>Registrate</button>
          </form>
          Tu cuenta ya existe? <NavLink to={"/login"}>Iniciar Sesion</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register