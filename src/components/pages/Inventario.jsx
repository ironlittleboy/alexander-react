import React, { useState } from "react";
import Logo from "../../../public/log.png";
import { NavLink } from "react-router-dom";
import "./inventario.css";

const Inventario = () => {
  const [data, setData] = useState([
    {
      id: 1,
      equipo: "laptop",
      laboratorio: "lab 203",
      descripcion: "laptop dell",
      modelo: "dell optiplex",
      serial: 123123123,
    },
    {
      id: 2,
      equipo: "laptop",
      laboratorio: "lab 203",
      descripcion: "laptop hp",
      modelo: "hp omen 16",
      serial: 23221,
    },
  ]);

  const handleClick = (id) => {
    const newArray = data.filter((object) => object.id !== id);
    setData(newArray);
  };

  const [showForm, setShowForm] = useState(false);
  const [equipo, setEquipo] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [modelo, setModelo] = useState("");
  const [serial, setSerial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
      id: Math.floor(Math.random() * 1000) + 1,
      equipo,
      laboratorio,
      descripcion,
      modelo,
      serial,
    };

    setData([...data, newObject]);

    setEquipo("");
    setLaboratorio("");
    setDescripcion("");
    setModelo("");
    setSerial("");

    setShowForm(false);
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
            <NavLink to={"/inventario"}>Inventario</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <div className="table-container">
          <h1>Equipos listados</h1>
          <table>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>Laboratorio</th>
                <th>Descripcion</th>
                <th>Modelo</th>
                <th>Serial</th>
                <th>Opcion</th>
              </tr>
            </thead>
            <tbody>
              {data.map((object) => (
                <tr key={object.id}>
                  <td>{object.equipo}</td>
                  <td>{object.laboratorio}</td>
                  <td>{object.descripcion}</td>
                  <td>{object.modelo}</td>
                  <td>{object.serial}</td>
                  <td>
                    <button onClick={() => handleClick(object.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showForm ? (
            <form onSubmit={handleSubmit}>
              <h2>Registrar nuevo equipo</h2>

              <label htmlFor="equipo">Equipo</label>
              <input
                type="text"
                id="equipo"
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
              />

              <label htmlFor="laboratorio">Laboratorio</label>
              <input
                type="text"
                id="laboratorio"
                value={laboratorio}
                onChange={(e) => setLaboratorio(e.target.value)}
              />

              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />

              <label htmlFor="modelo">Modelo</label>
              <input
                type="text"
                id="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />

              <label htmlFor="serial">Serial</label>
              <input
                type="text"
                id="serial"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />

              <button type="submit">Agregar al inventario</button>
            </form>
          ) : (
            <div className="registro-admin-boton">
              <button onClick={() => setShowForm(true)}>
                Mostrar formulario
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Inventario;
