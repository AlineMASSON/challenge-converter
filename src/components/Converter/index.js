// == Import
// npm
import React from 'react';

// data
import dataCurrencies from '../../data/currencies';

// Composants
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggle from '../Toggle';

// Assets
import './converter.scss';

// === Composant sous forme de classe
class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      baseAmount: 1,
      currency: 'United States Dollar',
      inputValue: '',
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateTitle();
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.setState({
          isOpen: false,
        });
      }
    });
  }

  componentDidUpdate() {
    this.updateTitle();
  }

  updateTitle = () => {
    const { currency } = this.state;
    document.title = `Converter - ${currency}`;
  };

  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    const currencyData = dataCurrencies.find((data) => data.name === currency);
    const { rate } = currencyData;
    const result = baseAmount * rate;

    return Math.round(result * 100) / 100;
  };

  getCurrencies = () => {
    const { inputValue } = this.state;
    let filteredCurrencies = dataCurrencies;
    const lowerCaseInputValue = inputValue.toLowerCase();

    if (lowerCaseInputValue.length > 0) {
      filteredCurrencies = dataCurrencies.filter(
        (currency) => {
          const lowerCaseCurrencyName = currency.name.toLowerCase();

          return lowerCaseCurrencyName.includes(lowerCaseInputValue);
        },
      );
    }

    return filteredCurrencies;
  };

  handleToggle = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  handleClick = (event) => {
    this.setState({
      currency: event.target.textContent,
    });
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { isOpen, currency, inputValue } = this.state;
    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggle isOpen={isOpen} toggle={this.handleToggle} />
        {
          isOpen
          && (
            <Currencies
              currencies={filteredCurrencies}
              handleClick={this.handleClick}
              value={inputValue}
              handleChange={this.handleChange}
            />
          )
        }
        <Amount currency={currency} value={convertedAmount} />
      </div>
    );
  }
}

// == Export
export default Converter;
