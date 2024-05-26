import {useState} from "react";

const Hook = () => {
    const [name, setName] = useState("Ali")
    const [age, setAge] = useState("27")

    const handleChange = () => {
    if(name == "Ali")
    {    
    setName("Ahmad");
    setAge(20)
    }
    else{
    setName("Ali");
    setAge(27)
    }
  }
    
    
    return (
        <div className="hookDiv">
        <h2>This is from Hook.js.</h2>
        <p>The name is {name} and the age is {age} </p>
        <button onClick={()=> handleChange()} >Value Changer</button>
        </div>
      );
}
 
export default Hook;