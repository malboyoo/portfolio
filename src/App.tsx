import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div
      className={`appContainer flex flex-col bg-dark-1 overflow-x-hidden 
    ${
      location.pathname === "/projects" ? "overflow-y-scroll md:overflow-y-auto snap-y snap-mandatory md:snap-none" : ""
    }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
