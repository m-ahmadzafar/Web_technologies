const Func = () => {

    const eventTargetPrinter = (e) => {
       console.log("The target event is: " + e.target);
    }


    //we use an anon funct ()=> to give the button a function with param so it doesnt get called on pageLoad.
    const paramPasser = (name) =>{
        console.log("The parameter name is: " +name)
    }
     
   // we dont use "eventTargetPrinter()" because that call the func on page load 
    return (
        
        <div className="func">
        <h2>This is from function.js</h2>
        <h3>This uses event</h3>
        <p>Now we learn how to use methods in React. P.s Check console for output</p>
        <button onClick={eventTargetPrinter}>E Printer</button> 
        <button onClick={()=> paramPasser("Ahmad")}>Param Printer</button> 
        
        
        </div>
      );
}
 
export default Func;