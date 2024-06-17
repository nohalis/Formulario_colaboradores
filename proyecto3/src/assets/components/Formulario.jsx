import { useState } from "react";
import PropTypes from "prop-types";
import Alerta from "./Alert";

function Formulario({ agregarColaborador, clearAlerts }) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [formularioAlerta, setFormularioAlerta] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, edad, cargo, telefono } = formData;

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setFormularioAlerta({
        variant: "danger",
        message: "Por favor completa todos los campos",
      });
    } else {
      agregarColaborador(formData);
      setFormData({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setFormularioAlerta({
        variant: "success",
        message: "Colaborador agregado exitosamente",
      });
      clearAlerts();
    }
  };

  return (
    <div>
      <h3 className="my-3">Agregar Colaborador</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        {["nombre", "correo", "edad", "cargo", "telefono"].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={
                field === "correo"
                  ? "email"
                  : field === "edad"
                  ? "number"
                  : "text"
              }
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success my-3">
          Agregar Colaborador
        </button>
        {formularioAlerta.message && (
          <Alerta
            variant={formularioAlerta.variant}
            message={formularioAlerta.message}
          />
        )}
      </form>
    </div>
  );
}

Formulario.propTypes = {
  agregarColaborador: PropTypes.func.isRequired,
  clearAlerts: PropTypes.func.isRequired,
};

export default Formulario;
