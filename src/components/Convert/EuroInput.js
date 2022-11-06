import React from 'react';
const EuroInput = (props) => {

  const euroChangeHandler = (event) => {
    props.onEurAmountChange(event.target.value)
  };

  return (
    <div>
      <form>
        <label>amount of euros to be converted</label>
        <input
          type='number'
          value={props.enteredEuro}
          onChange={euroChangeHandler}
        />
      </form>
    </div>
  );
};

export default EuroInput;
