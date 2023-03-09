import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import router
import { BrowserRouter as Router } from "react-router-dom";
import ClubContextProvider from "./components/ClubContext";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClubContextProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ClubContextProvider>
);
reportWebVitals();
