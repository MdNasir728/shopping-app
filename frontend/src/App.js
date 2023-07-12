import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Products,
  Footer,
  ProductDetails,
  Context,
  Cart
} from "./components/Index";
function App() {
  return (
    <BrowserRouter>
      <Context>
        <Navbar />
        {/* <Cart /> */}
        {/* <ProductDetails /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Context>
    </BrowserRouter>
  );
}

export default App;
