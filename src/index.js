import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import NavBar from "./components/ui/NavBar";

const Main = () => {
  const location = useLocation();
  const hideNavBarPaths = ["/login", "/signup"];
  return (
    <>
      {!hideNavBarPaths.includes(location.pathname.toLowerCase()) && <NavBar />}
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
