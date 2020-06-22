import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h1> this first child use context api </h1>
            <h4> Counter value is: {counterValue[0]} </h4>
            <button onClick={()=>{counterValue[1](++counterValue[0])}} >increament context</button>
        </div>
    )
}

export default Child;