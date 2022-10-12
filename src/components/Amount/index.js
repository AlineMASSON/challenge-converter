// === Imports
// npm
import propTypesLib from 'prop-types';
// locaux
import './amount.scss';

// === Composant
function Amount({ currency, value }) {
  return (
    <footer className="amount">
      <p className="amount-value">{value}</p>
      <p className="amount-currency">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  currency: propTypesLib.string.isRequired,
  value: propTypesLib.number.isRequired,
};

// === Export
export default Amount;
