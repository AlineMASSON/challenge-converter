// === Imports
// npm
import propTypesLib from 'prop-types';

// locaux
import './header.scss';

// === Composant
function Header({ baseAmount }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">{baseAmount} euro</p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: propTypesLib.number.isRequired,
};
// === Export
export default Header;
