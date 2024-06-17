import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Listado({ colaboradores, eliminarColaborador }) {
  return (
    <div className="table-responsive">
      <h2>Listado de Colaboradores</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map(
            ({ id, nombre, correo, edad, cargo, telefono }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{correo}</td>
                <td>{edad}</td>
                <td>{cargo}</td>
                <td>{telefono}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => eliminarColaborador(id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}

Listado.propTypes = {
  colaboradores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      correo: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      cargo: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
    })
  ).isRequired,
  eliminarColaborador: PropTypes.func.isRequired,
};

export default Listado;
