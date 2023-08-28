import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from "react-select";






const CurrencyDropDown = () => {
    const [currencyName, setCurrencyName] = useState('');
    const {dispatch} = useContext(AppContext);
      
    const CurrencyOptions = [
        { value: "$", label: "$ Dollar" },
        { value: "£", label: "£ Pound" },
        { value: "€", label: "€ Euro" },
        { value: "₹", label: "₹ Ruppee" }
      ];
    
    const CurrencyStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
        console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "#90EE90" : "white",
            color: "black"
          };
        }
      };
    




    const changeCurrencyName = () => {
        const action_setCurrency = {
            type: 'CHG_CURRENCY',
            payload: currencyName ,
        }
        console.log(`Option selected:`, currencyName);
        dispatch(action_setCurrency);
        return;
    }

    return (    
        <div className='alert alert-success'  style={{ backgroundColor: '#90EE90'}}>     
                  <Select
                        defaultValue={CurrencyOptions[1]}
                        label="Single select"
                        options={CurrencyOptions}
                        style={CurrencyStyles}
                        onChange={(event) => {setCurrencyName(event.target.value); changeCurrencyName();}}
                    />     
        </div>
    );
};
export default CurrencyDropDown;