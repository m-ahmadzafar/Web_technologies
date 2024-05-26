import { useState } from "react";

const State = () => {

    //define the state variable
    const [count, setCount] = useState(12);

    const countInc = ()=> {
        setCount(count +1);

    }

    const countDec = ()=> {
        if(count > 1){
        setCount(count -1);}
        else{
            alert("Cannot have Zero or Negative count")
        }
    }

    return (
    <div style={{backgroundColor: "lightblue"}}>
        <h2>This is from State.js</h2>
        <p>POSITIVE ONLY COUNTER: {count}</p>
        <button onClick={countInc}>PLUS</button>
        <button onClick={countDec}>MINUS</button>
    </div>  );
}
 
export default State;