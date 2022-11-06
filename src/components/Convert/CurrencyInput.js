import React from 'react';
const CurrencyInput = (props) => {

  const currencyChangeHandler = (event) => {
    props.onCurrChosenChange(event.target.value);
  };
  
  return (
    <div>
      <form>
        <label>currency to be converted into</label>
        <input
          type='text'
          value={props.enteredCurrency}
          onChange={currencyChangeHandler}
        />
      </form>
    </div>
  );
};

export default CurrencyInput;
