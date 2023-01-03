import Nav from "./Nav";
import { Link } from "react-router-dom";
import { currentDate } from "../helper/helper";

const Footer = () => {
  return (
    <div className="h-72 bg-black flex flex-col justify-center items-center md:flex-row text-center">
      <div>
        <Link
          to="/"
          className="text-gray-100 text-2xl md:text-3xl mx-10 font-bold"
        >
          Musical Instrument Store
        </Link>
        <p className="text-gray-100 p-4">Copyright &copy; {currentDate()}</p>
      </div>

      <div className="flex gap-8">
        <div className="w-4/12 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-slate-100 md:text-lg font-semibold border-b-2 mb-2 uppercase">
            Menu
          </h1>
          <nav className="grid grid-cols-1 text-white md:text-md">
            <Link to="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-slate-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/instruments"
              className="hover:text-slate-300 transition-colors"
            >
              Instruments
            </Link>
            <Link to="/cart" className="hover:text-slate-300 transition-colors">
              Cart
            </Link>
          </nav>
        </div>
        <div className="w-8/12 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-slate-100 md:text-lg uppercase font-semibold border-b-2 mb-2">
            Instruments
          </h1>
          <nav className="grid grid-cols-1 text-white md:text-md">
            <Link
              to="/guitars"
              className="hover:text-slate-300 transition-colors"
            >
              Guitars
            </Link>
            <Link
              to="/pianos"
              className="hover:text-slate-300 transition-colors"
            >
              Pianos
            </Link>
            <Link
              to="/trumpets"
              className="hover:text-slate-300 transition-colors"
            >
              Trumpets
            </Link>
            <Link
              to="/violins"
              className="hover:text-slate-300 transition-colors"
            >
              Violins
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
