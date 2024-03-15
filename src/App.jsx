import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./components/context/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header/>
        <Products/>
        <Cart/>
      </Provider>
      
    </div>
  );
}

export default App;
