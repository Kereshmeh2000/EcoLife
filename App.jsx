import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Shops from './Pages/Shops/Shops'
import Blogs from './Pages/Blogs/Blogs'
import AboutUs from './Pages/Blogs/Blogs'
import Contact from './Pages/Contact/Contact'
import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotal } from "./Redux/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((store) => store.cart)

  useEffect ( () => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/shops" element={<Shops />} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
