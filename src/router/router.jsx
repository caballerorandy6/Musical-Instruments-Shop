import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/about";
import Guitars from "../pages/Guitars";
import Pianos from "../pages/Pianos";
import Trumpets from "../pages/Trumpets";
import Violins from "../pages/Violins";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/guitars", element: <Guitars /> },
      { path: "/pianos", element: <Pianos /> },
      { path: "/trumpets", element: <Trumpets /> },
      { path: "/violins", element: <Violins /> },
    ],
  },
]);
