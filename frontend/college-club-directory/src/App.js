import "./App.css";

// import routes and route

import { Routes, Route } from "react-router-dom";

// Import compenents
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import ClubDetails from "./pages/ClubDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Clublogin from "./pages/Clublogin";
import ClubUpload from "./pages/ClubUpload";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club/:id" element={<ClubDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clublogin" element={<Clublogin />} />
        <Route path="/clubupload" element={<ClubUpload />} />
      </Routes>
    </div>
  );
};

export default App;
