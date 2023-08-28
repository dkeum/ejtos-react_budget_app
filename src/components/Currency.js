import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currencyName, setCurrencyName] = useState('');
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        // Dispatch the action when currencyName changes
        const action_setCurrency = {
            type: 'CHG_CURRENCY',
            payload: currencyName,
        };
        dispatch(action_setCurrency);
    }, [currencyName, dispatch]);

    const changeCurrencyName = (val) => {
        setCurrencyName(val); // Use the provided val parameter
    };

    return (
        <div className='alert alert-success' style={{ backgroundColor: '#90EE90' }}>
            <select
                defaultValue={'DEFAULT'}
                style={{ backgroundColor: '#90EE90', color: 'white' }}
                onChange={(event) => changeCurrencyName(event.target.value)}>
                <option style={{ color: 'black' }} value="DEFAULT" label="Currency (€ Euro)" hidden disabled></option>
                <option style={{ color: 'black' }} value="$" name="dollar" label="$ Dollar"></option>
                <option style={{ color: 'black' }} value="£" name="pound">
                    £ Pound
                </option>
                <option style={{ color: 'black' }} value="€" name="euro">
                    € Euro
                </option>
                <option style={{ color: 'black' }} value="₹" name="ruppee">
                    ₹ Rupee
                </option>
            </select>
        </div>
    );
};

export default Currency;