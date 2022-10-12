// === Imports
//  npm
import PropTypesLib from 'prop-types';

// locaux
import Currency from './Currency';

import './currencies.scss';

// === Composant
function Currencies({
  currencies,
  handleClick,
  value,
  handleChange,
}) {
  return (
    <div className="currencies">
      <input
        className="currencies-search"
        type="text"
        placeholder="Rechercher"
        value={value}
        onChange={handleChange}
      />
      <ul className="currencies-list">
        {
          currencies.map(
            (currency) => <Currency key={currency.name} handleClick={handleClick} {...currency} />,
          )
        }
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      name: PropTypesLib.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypesLib.func.isRequired,
  value: PropTypesLib.string.isRequired,
  handleChange: PropTypesLib.func.isRequired,
};

// === Export
export default Currencies;
