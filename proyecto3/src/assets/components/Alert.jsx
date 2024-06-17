import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

function Alerta({ variant, message }) {
  return <Alert variant={variant}>{message}</Alert>;
}

Alerta.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alerta;
