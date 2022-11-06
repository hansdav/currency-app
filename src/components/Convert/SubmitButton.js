import React, { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import EuroInput from './EuroInput';
import ResultAmount from './ResultAmount';


const SubmitButton = () => {

    const [enteredEuro, setEnteredEuro] = useState('');
    const [enteredCurrency, setEnteredCurrency] = useState('');
    const [resultAmount, setResultAmount] = useState('');

    const clickHandler = () => {
       const currencyData = {
            euro: enteredEuro,
            currency: enteredCurrency
       }
       console.log(currencyData)

       const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca47b89123mshe3fc09008c94679p1cf17ajsn636f11027799',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };
    
    fetch('https://currency-exchange.p.rapidapi.com/exchange?from=EUR&to=' + currencyData.currency , options)
        .then(response => response.json())
        .then(response => console.log(response * currencyData.euro))
        .catch(err => console.error(err));
    };



    return (
        <div>
            <EuroInput eurAmount={enteredEuro} onEurAmountChange={setEnteredEuro}></EuroInput>
            <CurrencyInput currChosen={enteredCurrency} onCurrChosenChange={setEnteredCurrency}></CurrencyInput>
            <button onClick={clickHandler}>SUBMIT</button>
            <ResultAmount result={resultAmount} onResultAmountChange={setResultAmount}></ResultAmount>
        </div>
    );

}

export default SubmitButton