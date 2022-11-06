import React from 'react';

const ResultAmount = (props) => {
    props.onResultAmountChange()

    return (
        <div>
            <form>
                <label>Converted Amount</label>
                <input
                    type='number'
                    value={props.resultAmount}
                    readOnly={true}
                />
            </form>
        </div>
    )

};

export default ResultAmount;