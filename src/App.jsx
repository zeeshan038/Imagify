import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Credit from "./Pages/Credit";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<Credit />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
