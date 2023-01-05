import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="appContainer flex flex-col bg-dark-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
