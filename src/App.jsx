import Home from "./components/home/home";
import CartContent from  "./components/CartContent/CartContent";
import CartProvider from "./components/Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
