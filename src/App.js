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
    <ProductListItem />

    <ProductListItem />
    
    <ProductListItem />
    </div>
    </>
  );
}

export default App;
