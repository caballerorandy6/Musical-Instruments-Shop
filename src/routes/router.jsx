import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/about";
import Instruments from "../pages/Instruments";
import Guitars, { loader as guitarsLoader } from "../pages/Guitars";
import Pianos, { loader as pianoLoader } from "../pages/Pianos";
import Trumpets, { loader as trumpetLoader } from "../pages/Trumpets";
import Violins, { loader as violinLoader } from "../pages/Violins";
import GuitarDetail from "../components/GuitarDetail";
import TrumpetDetail from "../components/TrumpetDetail";
import PianoDetail from "../components/PianoDetail";
import ViolinDetail from "../components/ViolinDetail";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/instruments", element: <Instruments /> },
      { path: "/guitars", element: <Guitars />, loader: guitarsLoader },
      { path: "/pianos", element: <Pianos />, loader: pianoLoader },
      { path: "/trumpets", element: <Trumpets />, loader: trumpetLoader },
      { path: "/Violins", element: <Violins />, loader: violinLoader },
      { path: "/guitar/:guitarURL", element: <GuitarDetail /> },
      { path: "/trumpet/:trumpetURL", element: <TrumpetDetail /> },
      { path: "/piano/:pianoURL", element: <PianoDetail /> },
      { path: "/violin/:violinURL", element: <ViolinDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
