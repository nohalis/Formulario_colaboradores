import React, { useState } from "react";
import Listado from "./assets/components/Listado";
import Formulario from "./assets/components/Formulario";
import Buscador from "./assets/components/Buscador";
import Alerta from "./assets/components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseColaboradores } from "./assets/js/colaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState([baseColaboradores]);
  const [alertas, setAlertas] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([
      ...colaboradores,
      { id: Date.now(), ...nuevoColaborador },
    ]);
    setAlertas([
      { variant: "success", message: "Colaborador agregado exitosamente" },
    ]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
    setAlertas([
      { variant: "danger", message: "Colaborador eliminado exitosamente" },
    ]);
  };

  const buscarColaborador = (query) => {
    if (!query) {
      setAlertaBusqueda({
        variant: "danger",
        message: "Por favor ingresa un término de búsqueda",
      });
      return [];
    }
    const resultados = baseColaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(query.toLowerCase())
    );

    if (resultados.length === 0) {
      setAlertaBusqueda({
        variant: "warning",
        message: "No se encontraron colaboradores con ese término de búsqueda",
      });
    }

    setColaboradores(resultados);
    clearAlerts();

    return resultados;
  };

  const clearAlerts = () => {
    setAlertas([]);
  };

  const resetListado = () => {
    clearAlerts();
    setAlertas([{ variant: "info", message: "Listado restablecido" }]);
    setColaboradores(baseColaboradores);
  };

  return (
    <div className="container">
      {alertas.map((alerta, index) => (
        <Alerta key={index} variant={alerta.variant} message={alerta.message} />
      ))}
      <Listado
        colaboradores={colaboradores}
        eliminarColaborador={eliminarColaborador}
      />
      <Buscador
        buscarColaborador={buscarColaborador}
        clearAlerts={clearAlerts}
        resetListado={resetListado}
      />
      <Formulario
        agregarColaborador={agregarColaborador}
        clearAlerts={clearAlerts}
      />
    </div>
  );
};

export default App;
