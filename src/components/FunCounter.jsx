import React,{ useState} from 'react';

function FunCounter(){
    let [count, setCount] =useState(10);
    const increment = ()=>{
        setCount(count + 1);
    }
    const decrement = ()=>{
        setCount(count -1);
    }
    return(
    <div>
        <h1>{count}</h1>
        <button onClick = {increment} className="btn btn-primary">increment</button>
        <button onClick = {decrement} className="btn btn-success">decrement</button>
    </div>
    );
}
 export default FunCounter;
