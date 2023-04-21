import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";


function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home/>} exact/>
  <Route path="/cart" element={<Cart/>} exact/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
