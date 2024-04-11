import Calc from "./calc.jsx";
import Header from "./header.jsx";
import Card from "./card.jsx";
import ProductCarousel from "./productCarousel.jsx";


function App() {

  return (
    <>
      <div className="center_div">
      <Header/>
      <Calc/>
      <div className="flexCards">
      <Card/>
      <Card/> 
      <Card/>
      <Card/>
      </div>
      <ProductCarousel/>
      </div>
    </>
  )
}

export default App
