import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/about";
import Instruments from "../components/Instruments";
import Guitars from "../pages/Instruments/Guitars";
import Pianos from "../pages/Instruments/Pianos";
import Trumpets from "../pages/Instruments/Trumpets";
import Violins from "../pages/Instruments/Violins";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/instruments",
        element: <Instruments />,
        children: [
          { path: "/instruments/guitars", element: <Guitars /> },
          { path: "/instruments/pianos", element: <Pianos /> },
          { path: "/instruments/trumpets", element: <Trumpets /> },
          { path: "/instruments/violins", element: <Violins /> },
        ],
      },
    ],
  },
]);
