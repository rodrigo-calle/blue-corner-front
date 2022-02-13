import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import ProductRegister from "./pages/productRegister/ProductRegister";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          
          <Routes>
              <Route path="/" element={<ProductList />} />      
              <Route path="/product-register" element={<ProductRegister />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
