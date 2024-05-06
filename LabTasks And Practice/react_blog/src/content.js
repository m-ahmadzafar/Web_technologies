const Content = () => {
    const string = "Ahmad"
    const num = 50;
    
    return (
        <div className="contentDiv">
        <h2>This is from Content.js.</h2>
        <p>The num coming from const is: <b>{num}</b></p>
        <p>The string coming from const is: <b>{string}</b></p>
        <p>My array is: {[1,2,3,4,5]}</p>
        <p>Note 2: We can only render numbers, string and arrays. React converts them into strings. Anything else (bools, objects) will give error.</p>
        <p>Note: i have made them bold myself. That is not by default.</p>
        

        </div>
      );
}
 
export default Content;