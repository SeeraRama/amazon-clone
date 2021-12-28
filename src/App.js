import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout/checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebasefile";
import { useStateValue } from "./store/StateProvider";
function App() {
  const [{ basket }, dispactch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("User is ", user);
      if (user) {
        dispactch({ type: "SET_USER", user: user });
      } else {
        dispactch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
