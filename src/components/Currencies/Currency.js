// === Imports
//  npm
import PropTypesLib from 'prop-types';

// === Composant
function Currency({ name, handleClick }) {
  return (
    <li
      className="currency"
      onClick={handleClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypesLib.string.isRequired,
  handleClick: PropTypesLib.func.isRequired,
};

// === Export
export default Currency;
