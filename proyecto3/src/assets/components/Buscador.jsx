import { useState } from "react";
import PropTypes from "prop-types";
import Alerta from "./Alert";

function Buscador({ buscarColaborador, clearAlerts, resetListado }) {
  const [query, setQuery] = useState("");
  const [busquedaAlerta, setBusquedaAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      setBusquedaAlerta({
        variant: "danger",
        message: "Por favor ingresa un término de búsqueda",
      });
      return;
    }
    const resultados = buscarColaborador(query);
    setQuery("");
    clearAlerts();
    if (resultados.length === 0) {
      setBusquedaAlerta({
        variant: "warning",
        message: "No se encontraron colaboradores con ese término de búsqueda",
      });
    }
  };

  const handleReset = () => {
    clearAlerts();
    resetListado();
    setQuery("");
  };

  return (
    <div className="buscador">
      <h3>Buscador Colaborador</h3>
      <hr />
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre, correo, edad, cargo o teléfono"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success my-3">
          Buscar
        </button>
        <button
          type="button"
          className="btn btn-danger my-3 mx-2"
          onClick={handleReset}
        >
          Restablecer
        </button>
        {busquedaAlerta.message && (
          <Alerta
            variant={busquedaAlerta.variant}
            message={busquedaAlerta.message}
          />
        )}
      </form>
    </div>
  );
}

Buscador.propTypes = {
  buscarColaborador: PropTypes.func.isRequired,
  clearAlerts: PropTypes.func.isRequired,
  resetListado: PropTypes.func.isRequired,
};

export default Buscador;
