import React from 'react';

const ResultAmount = (props) => {

    return (
        <div>
            <form>
                <label>Converted Amount</label>
                <input
                    type='number'
                    value={props.amount}
                    readOnly={true}
                />
            </form>
        </div>
    )

};

export default ResultAmount;