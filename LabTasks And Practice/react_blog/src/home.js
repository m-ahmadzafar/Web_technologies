import { useEffect, useState } from "react";
import BlogList from "./bloglist";



const Home = () => {

    const testConst = 12;
    const [blogs, setBlogs] = useState([
        {
            title: 'Blog 1', body: 'body of blog 1', author: "chad 1", id: 1
        },
        {
            title: 'Blog 2', body: 'body of blog 2', author: "chad 2", id: 2
        },
        {
            title: 'Blog 3', body: 'body of blog 3', author: "chad 3", id: 3
        }
    ]);


    const [name, setName] = useState("Ahmad"); 

    // useEffect(()=> {
    //     console.log("Wagwan state changer");

    //     // By default, useEffect runs after every completed render, including the initial render. 
    // });

    //if we want it to only run on the first render. we use
    // useEffect(()=> {
    //     console.log("Wagwan state changer");

    // }, []);

    //useEffect Hook
    //if we want to run useEffect on a specific change, this change will be a "dependancy" and will will add it to the [] in the useEffect method.
    useEffect(()=> {
        console.log("Use Eff ran")
    }, [name]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    };
    return ( <div className="homeDiv">
    <h2>This home component uses props. </h2>
    <h5>Prop are a way to pass data from a parent to a child component.</h5>
    <BlogList blogs={blogs} title="Title from home.js" handleDelete={handleDelete}/>

    <div className="nameChanger">
        <p>{name}</p>
        <button onClick={() => setName("Ali")}>Change Name</button>
    </div>
   </div> );
}
 
export default Home;