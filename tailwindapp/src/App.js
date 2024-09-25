import Appbar from "./components.js/Appbar";
import Data from "./components.js/Data";
import Filter from "./components.js/Filter";
import Productslist from "./components.js/Productslist";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Filter />
      <Data />
      {/* <Productslist /> */}
    </div>
  );
}

export default App;
