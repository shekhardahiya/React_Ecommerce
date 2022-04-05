import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/home.component";
import Footer from "./Footer/footer.component";
import Header from "./Header/header.component";
import Products from "./Products/products.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Register/register.component";
import Login from "./Login/login.component";
import Cart from "./Cart/cart.component";
import CartContext from "./Context/cartContext";
import CartContextProvider from "./Context/cartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <>
                  <h1 style={{ color: "red" }}> Resource not found</h1>
                </>
              }
            />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
