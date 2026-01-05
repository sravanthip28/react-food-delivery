import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<PlaceOrder />}></Route>
      </Routes>
    </div>
  );
};

export default App;
