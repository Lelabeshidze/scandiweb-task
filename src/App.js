import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { ProductContextProvider } from "./context/productContext";
import AddNewProduct from "./pages/AddNewProduct";
import ProductList from "./pages/ProductList";
import MainLayout from "./layout";
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddNewProduct />} />
          </Routes>
        </MainLayout>
      </ProductContextProvider>
    </div>
  );
}

export default App;
