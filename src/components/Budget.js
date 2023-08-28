import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [Budgets, setBudgets] = useState('');
    const {budget,dispatch, remaining,currency} = useContext(AppContext);

    useEffect(()=>console.log(currency))
    const checkBudget = () => {
        if(Budgets >= 20000){
            alert("The budget value cannot exceed more than 20,000!")
            setBudgets("");
            return;
        }

        const spending = Budgets-remaining;

        if(Budgets <= spending){
            alert("CANNOT BE LOWER THaN SPENDING!");
        }
        

        const action_setBudget = {
            type: 'SET_BUDGET',
            payload: parseInt(Budgets),
        }
        
        dispatch(action_setBudget);
        return;
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ size: 10}}
                    step="10"
                    onChange={(event) => {setBudgets(event.target.value); checkBudget();}}>
                </input>
            </span>
        </div>
    );
};
export default Budget;