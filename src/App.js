import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { ProductContextProvider } from "./context/productContext";
import AddNewProduct from "./pages/AddNewProduct";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddNewProduct />} />
          </Routes>
        
      </ProductContextProvider>
    </div>
  );
}

export default App;
