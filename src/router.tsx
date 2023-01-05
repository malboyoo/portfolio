import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
]);
