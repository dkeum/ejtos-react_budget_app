import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import increaseImage from '../assets/increase.png';
import decreaseImage from '../assets/decrease.png';

const ExpenseItem = (props) => {
    const { dispatch,currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const button_style = {
        width:'40px',
        height:'30px'
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button onClick={event => increaseAllocation(props.name)} >
                    <img src={increaseImage} alt="Increment" style={button_style}/>
                </button>
            </td>
            <td>
                <button onClick={event => decreaseAllocation(props.name)}>
                    <img src={decreaseImage} alt="Decrement" style={button_style}/>
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </td>
        </tr>
    );
    }
export default ExpenseItem;