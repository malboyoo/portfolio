import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="py-5 px-10 md:px-14 flex flex-col md:flex-row justify-between items-center">
      <NavLink to="/" className={({ isActive }) => (isActive ? "" : "inactive")}>
        <h2 className="text-2xl font-medium hover:scale-110 transition-all">Thibaut Lefevre</h2>
      </NavLink>
      <nav className="font-medium flex justify-center items-center mt-4 md:mt-1">
        <ul className="flex">
          <li className="mx-2 hover:scale-110 transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-2 hover:scale-110 transition-all">
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li className="mx-2 hover:scale-110 transition-all">
            <NavLink to="resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
