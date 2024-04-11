import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Jobdetail from "../pages/Jobdetail";
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Routing = () => {
  return (
    <>
      <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobdetails" element={<Jobdetail />} />
        </Routes>
        <Footer />
        
      </Router>
    </>
  );
};

export default Routing;
