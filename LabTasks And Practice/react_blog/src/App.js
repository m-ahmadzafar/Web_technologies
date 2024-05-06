import Navbar from './navbar';
import Content from './content';
import Func from './function';
import Hook from './hooks';
import List from "./list";
import Home from './home';
import BlogFetcher from './blogFetcher';


function App() {



  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is just some test text.</p>
      <Navbar/>
      <BlogFetcher/>
      <Content/>
      <Func/>
      <Hook/>
     <List/>
     <Home/>
    </div>
  );
}

export default App;
