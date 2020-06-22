import React, { useReducer } from 'react';
import counterReducer from './CounterReducer'

const Child2 = () => {

    let [state, dispatch]=useReducer(counterReducer, 1)
    console.log(state)
    return(
        <div>
            <h1>this second child use Reducer</h1>
            <h3>value of reducer is: {state} </h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increament reducer</button>
        </div>
    )
}

export default Child2;