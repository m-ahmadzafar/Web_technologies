import { useState } from "react";

const List = () => {

    const tdStyle = {
        backgroundColor: "blue",
        justifyContent: "space-between"
    }

    const [items, setItems] = useState([
        { title: "My new blogpost 1", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 1},
        { title: "My new blogpost 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 2},
        { title: "My new blogpost 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid minima asperiores",  id: 3},
       
    ])

    const [Animal, setAnimal] = useState(
        [{
            id: 1,
            name: "Dog",
            type: "Mammal",
            diet: "omnivore"
        },
        {
            id: 2,
            name: "Cat",
            type: "Mammal",
            diet: "omnivore"
        },
        {
            id: 3,
            name: "Lion",
            type: "Mammal",
            diet: "Carnivore"
        }]
    )

    //to show one object in the list
    const animalWithId2 = Animal.find(animal=>animal.id === 2)
    return ( 
        <div className="listDiv">
            <h2>This is from list.js.</h2>
            <p>For outputting it. we use a function called .maps which iters through the list using the  key/id attribute</p>
            {items.map((blog) =>
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            )}
            
        <p>Animal 2 name: {animalWithId2.name}</p>
        <p>Animal 2 diet: {animalWithId2.diet}</p>

        <p>Now lets map animal as well</p>
        <table style={
            {
                backgroundColor: "red",
            }
        }>
            <th>
                <td style={tdStyle}>Id</td>
                <td style={tdStyle}>Specie</td>
                <td style={tdStyle}>Diet</td>
            </th>
            <tr>
            {Animal.map( (animal)=>
            
               <td> 
                <p>{animal.id}</p>
                <p>{animal.name}</p>
                <p>{animal.diet}</p>
               </td>
         
                
            )}
               </tr>
        </table>
          
        </div>
     );
}
 
export default List;