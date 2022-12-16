import StopWatch from "./StopWatch"
import NumberCounter from "./NumberCounter";
import Popup from "./Popup";
import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
    {/* < StopWatch /> */}
    {/* < NumberCounter /> */}
    {/* < Popup /> */}
    <div style={{display:'flex', gap:'10px'}}>
    <ProductListItem imNo={201} name={"MAC BOOK AIR"} productPriceFormated={"1,140,000원"}/>

    <ProductListItem imNo={1} name={"MAC BOOK PRO"} productPriceFormated={"3,320,000원"}/>
    
    <ProductListItem imNo={2} name={"MAC BOOK PLUS"} productPriceFormated={"4,430,000원"}/>
    </div>
    </>
  );
}

export default App;
