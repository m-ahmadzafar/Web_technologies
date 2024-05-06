import { useState } from "react";

const List = () => {

    const [items, setItems] = useState([
        { title: "My new blogpost 1", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 1},
        { title: "My new blogpost 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 2},
        { title: "My new blogpost 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 3},
       
    
    ])
    return ( 
        <div className="listDiv">
            <h2>This is from list.js.</h2>
            <p>For outputting it. we use a function called .maps which iters through the list using the  key/id attribute</p>
            {items.map((blog) =>(
                <div>
                    <h2> {blog.title}</h2>
                    <p>{blog.content}</p>
                   
                </div>
            ))}
            
        </div>
     );
}
 
export default List;